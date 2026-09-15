const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = process.env.PORT || 5000;

// ======================================
// MIDDLEWARE
// ======================================

app.use(cors());
app.use(express.json());

app.use(
    "/uploads",
    express.static(
        path.join(__dirname, "uploads")
    )
);

// ======================================
// UPLOAD
// ======================================

const upload = multer({
    dest: path.join(__dirname, "uploads/")
});

// ======================================
// FILE PATHS
// ======================================

const dataFolder =
    path.join(__dirname, "data");

const usersFile =
    path.join(dataFolder, "users.json");

const problemsFile =
    path.join(dataFolder, "problems.json");

// ======================================
// CREATE FOLDERS
// ======================================

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder, {
        recursive: true
    });
}

if (!fs.existsSync(
    path.join(__dirname, "uploads")
)) {
    fs.mkdirSync(
        path.join(__dirname, "uploads"),
        {
            recursive: true
        }
    );
}

// ======================================
// JSON FUNCTIONS
// ======================================

function readJSON(filePath) {

    if (!fs.existsSync(filePath)) {
        return [];
    }

    try {

        return JSON.parse(
            fs.readFileSync(
                filePath,
                "utf8"
            )
        );

    } catch (error) {

        console.log(
            "JSON Read Error:",
            error.message
        );

        return [];
    }
}

function writeJSON(filePath, data) {

    fs.writeFileSync(
        filePath,
        JSON.stringify(
            data,
            null,
            2
        )
    );
}

// ======================================
// HEALTH
// ======================================

app.get(
    "/api/health",
    (req, res) => {

        res.json({
            success: true,
            message:
                "Jan-Innovate Hub Backend is running!"
        });

    }
);

// ======================================
// SIGNUP
// ======================================

app.post(
    "/api/signup",
    (req, res) => {

        const {
            name,
            email,
            password,
            accountType
        } = req.body;

        if (
            !name ||
            !email ||
            !password ||
            !accountType
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "All fields are required"

            });
        }

        const users =
            readJSON(usersFile);

        const existingUser =
            users.find(
                user =>
                    user.email.toLowerCase() ===
                    email.toLowerCase()
            );

        if (existingUser) {

            return res.status(400).json({

                success: false,

                message:
                    "Email already registered"

            });
        }

        const newUser = {

            id: Date.now(),

            name,

            email,

            password,

            accountType,

            createdAt:
                new Date().toISOString()

        };

        users.push(newUser);

        writeJSON(
            usersFile,
            users
        );

        res.json({

            success: true,

            message:
                "Signup successful!"

        });

    }
);

// ======================================
// LOGIN
// ======================================

app.post(
    "/api/login",
    (req, res) => {

        const {
            email,
            password
        } = req.body;

        if (!email || !password) {

            return res.status(400).json({

                success: false,

                message:
                    "Email and password are required"

            });
        }

        const users =
            readJSON(usersFile);

        const user =
            users.find(
                user =>
                    user.email.toLowerCase() ===
                    email.toLowerCase() &&
                    user.password === password
            );

        if (!user) {

            return res.status(401).json({

                success: false,

                message:
                    "Invalid email or password"

            });
        }

        res.json({

            success: true,

            message:
                "Login successful!",

            user: {

                id: user.id,

                name: user.name,

                email: user.email,

                accountType:
                    user.accountType

            }

        });

    }
);

// ======================================
// ADMIN LOGIN
// ======================================

app.post(
    "/api/admin-login",
    (req, res) => {

        const {
            email,
            password
        } = req.body;

        const ADMIN_EMAIL =
            "admin@innovation.com";

        const ADMIN_PASSWORD =
            "admin123";

        if (
            email === ADMIN_EMAIL &&
            password === ADMIN_PASSWORD
        ) {

            return res.json({

                success: true,

                message:
                    "Admin login successful!",

                admin: {

                    email:
                        ADMIN_EMAIL,

                    role:
                        "Admin"

                }

            });
        }

        res.status(401).json({

            success: false,

            message:
                "Invalid admin email or password"

        });

    }
);

// ======================================
// STEP 5A
// AI CATEGORY + PRIORITY
// ======================================

app.post(
    "/api/ai/analyze",
    (req, res) => {

        const {
            title = "",
            description = "",
            impact = ""
        } = req.body;

        const text =
            `${title} ${description}`
            .toLowerCase();

        const categories = {

            Education: [
                "school",
                "college",
                "student",
                "teacher",
                "education",
                "class",
                "classroom",
                "exam",
                "study",
                "learning"
            ],

            Healthcare: [
                "hospital",
                "doctor",
                "medicine",
                "health",
                "clinic",
                "ambulance",
                "patient",
                "disease",
                "medical"
            ],

            Agriculture: [
                "farmer",
                "farm",
                "crop",
                "agriculture",
                "irrigation",
                "seed",
                "fertilizer",
                "field",
                "farming"
            ],

            Water: [
                "water",
                "drinking water",
                "pipeline",
                "borewell",
                "well",
                "tap",
                "water supply",
                "water shortage"
            ],

            Sanitation: [
                "toilet",
                "garbage",
                "waste",
                "sewage",
                "drain",
                "sanitation",
                "dustbin",
                "cleanliness"
            ],

            Environment: [
                "pollution",
                "plastic",
                "river",
                "tree",
                "forest",
                "environment",
                "air pollution",
                "climate"
            ],

            Infrastructure: [
                "road",
                "bridge",
                "street light",
                "electricity",
                "traffic",
                "building",
                "footpath",
                "drainage",
                "infrastructure"
            ]

        };

        const scores = {};

        for (
            const category in categories
        ) {

            scores[category] = 0;

            categories[category]
                .forEach(
                    keyword => {

                        if (
                            text.includes(
                                keyword
                            )
                        ) {

                            scores[category]++;

                        }

                    }
                );

        }

        let detectedCategory =
            "Other";

        let highestScore = 0;

        for (
            const category in scores
        ) {

            if (
                scores[category] >
                highestScore
            ) {

                highestScore =
                    scores[category];

                detectedCategory =
                    category;

            }

        }

        let confidence = 50;

        if (highestScore >= 3) {

            confidence = 95;

        } else if (highestScore === 2) {

            confidence = 85;

        } else if (highestScore === 1) {

            confidence = 70;

        }

        const highPriorityWords = [

            "emergency",
            "urgent",
            "danger",
            "critical",
            "accident",
            "unsafe",
            "shortage",
            "severe",
            "immediately",
            "life threatening"

        ];

        const mediumPriorityWords = [

            "problem",
            "lack",
            "poor",
            "difficulty",
            "issue",
            "need"

        ];

        let priority = "Low";

        const highFound =
            highPriorityWords.some(
                word =>
                    text.includes(word)
            );

        const mediumFound =
            mediumPriorityWords.some(
                word =>
                    text.includes(word)
            );

        if (
            impact === "High" ||
            highFound
        ) {

            priority = "High";

        } else if (
            impact === "Medium" ||
            mediumFound
        ) {

            priority = "Medium";

        }

        res.json({

            success: true,

            category:
                detectedCategory,

            priority,

            confidence,

            score:
                highestScore

        });

    }
);

// ======================================
// STEP 5B
// DUPLICATE DETECTION
// ======================================

function normalizeText(text) {

    return text
        .toLowerCase()
        .replace(
            /[^a-z0-9\s]/g,
            ""
        )
        .split(/\s+/)
        .filter(
            word =>
                word.length > 2
        );

}

function calculateSimilarity(
    text1,
    text2
) {

    const words1 =
        new Set(
            normalizeText(text1)
        );

    const words2 =
        new Set(
            normalizeText(text2)
        );

    if (
        words1.size === 0 ||
        words2.size === 0
    ) {

        return 0;

    }

    let commonWords = 0;

    words1.forEach(word => {

        if (
            words2.has(word)
        ) {

            commonWords++;

        }

    });

    const totalUniqueWords =
        new Set([
            ...words1,
            ...words2
        ]).size;

    if (
        totalUniqueWords === 0
    ) {

        return 0;

    }

    return Math.round(
        (
            commonWords /
            totalUniqueWords
        ) * 100
    );

}

app.post(
    "/api/ai/duplicate-check",
    (req, res) => {

        const {
            title = "",
            description = ""
        } = req.body;

        const newText =
            `${title} ${description}`;

        const problems =
            readJSON(problemsFile);

        let bestMatch = null;

        let highestSimilarity = 0;

        problems.forEach(problem => {

            const existingText =
                `${problem.title} ${problem.description}`;

            const similarity =
                calculateSimilarity(
                    newText,
                    existingText
                );

            if (
                similarity >
                highestSimilarity
            ) {

                highestSimilarity =
                    similarity;

                bestMatch =
                    problem;

            }

        });

        const isDuplicate =
            highestSimilarity >= 45;

        res.json({

            success: true,

            isDuplicate,

            similarity:
                highestSimilarity,

            similarProblem:
                bestMatch
                    ? {
                        id:
                            bestMatch.id,

                        title:
                            bestMatch.title,

                        category:
                            bestMatch.category,

                        district:
                            bestMatch.district,

                        status:
                            bestMatch.status
                    }
                    : null

        });

    }
);

// ======================================
// GET ALL PROBLEMS
// ======================================

app.get(
    "/api/problems",
    (req, res) => {

        const problems =
            readJSON(problemsFile);

        res.json({

            success: true,

            problems

        });

    }
);

// ======================================
// SUBMIT PROBLEM
// ======================================

app.post(
    "/api/problems",
    upload.single("problemImage"),

    (req, res) => {

        const {

            title,
            category,
            impact,
            state,
            district,
            location,
            description,
            expectedSolution,
            beneficiaries,
            submittedBy,

            aiCategory,
            aiPriority,
            aiConfidence,

            duplicateChecked,
            isDuplicate,
            duplicateSimilarity,
            similarProblemId,
            similarProblemTitle

        } = req.body;

        if (
            !title ||
            !category ||
            !description
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Title, category and description are required"

            });

        }

        const problems =
            readJSON(problemsFile);

        const newProblem = {

            id: Date.now(),

            title,

            category,

            impact:
                impact || "",

            state:
                state || "",

            district:
                district || "",

            location:
                location || "",

            description,

            expectedSolution:
                expectedSolution || "",

            beneficiaries:
                beneficiaries || "",

            submittedBy:
                submittedBy || "",

            // AI CATEGORY
            aiCategory:
                aiCategory || "",

            // AI PRIORITY
            aiPriority:
                aiPriority || "",

            // AI CONFIDENCE
            aiConfidence:
                aiConfidence || "",

            // DUPLICATE DATA
            duplicateChecked:
                duplicateChecked || "false",

            isDuplicate:
                isDuplicate || "false",

            duplicateSimilarity:
                duplicateSimilarity || "0",

            similarProblemId:
                similarProblemId || "",

            similarProblemTitle:
                similarProblemTitle || "",

            image:
                req.file
                    ? req.file.filename
                    : null,

            status:
                "Pending",

            createdAt:
                new Date().toISOString()

        };

        problems.push(
            newProblem
        );

        writeJSON(
            problemsFile,
            problems
        );

        res.json({

            success: true,

            message:
                "Problem submitted successfully!",

            problem:
                newProblem

        });

    }
);

// ======================================
// UPDATE STATUS
// ======================================

app.patch(
    "/api/problems/:id/status",
    (req, res) => {

        const {
            status
        } = req.body;

        const problemId =
            Number(req.params.id);

        const allowedStatuses = [

            "Pending",
            "Approved",
            "Rejected",
            "In Progress",
            "Resolved"

        ];

        if (
            !allowedStatuses.includes(
                status
            )
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Invalid status"

            });

        }

        const problems =
            readJSON(problemsFile);

        const problem =
            problems.find(
                p =>
                    p.id === problemId
            );

        if (!problem) {

            return res.status(404).json({

                success: false,

                message:
                    "Problem not found"

            });

        }

        problem.status =
            status;

        writeJSON(
            problemsFile,
            problems
        );

        res.json({

            success: true,

            message:
                `Problem ${status} successfully!`,

            problem

        });

    }
);

// ======================================
// DELETE PROBLEM
// ======================================

app.delete(
    "/api/problems/:id",
    (req, res) => {

        const problemId =
            Number(req.params.id);

        const problems =
            readJSON(problemsFile);

        const problem =
            problems.find(
                p =>
                    p.id === problemId
            );

        if (!problem) {

            return res.status(404).json({

                success: false,

                message:
                    "Problem not found"

            });

        }

        const updatedProblems =
            problems.filter(
                p =>
                    p.id !== problemId
            );

        writeJSON(
            problemsFile,
            updatedProblems
        );

        res.json({

            success: true,

            message:
                "Problem deleted successfully!"

        });

    }
);

// ======================================
// START SERVER
// ======================================

app.listen(
    PORT,
    () => {

        console.log(
            `Backend running at http://localhost:${PORT}`
        );

    }
);
