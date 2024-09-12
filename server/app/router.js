const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions

const announceActions = require("./controllers/AnnounceActions");
const companyActions = require("./controllers/CompanyActions");
const candidateActions = require("./controllers/CandidateActions");

// Route to get a list of items
router.get("/announce", announceActions.browse);
router.get("/company", companyActions.browse);
router.get("/candidate", candidateActions.browse);

// Route to get a specific item by ID
router.get("/announce/:id", announceActions.read);
router.get("/company/:id", companyActions.read);

// Route to add a new item
router.post("/announce", announceActions.add);
router.post("/company", companyActions.add);

// Route to delete an item
router.delete("/announce/:id", announceActions.destroy);
router.delete("/company/:id", companyActions.destroy);

// Route to edit an item
router.put("/announce/:id", announceActions.edit);
router.put("/company/:id", companyActions.edit);
/* ************************************************************************* */

module.exports = router;
