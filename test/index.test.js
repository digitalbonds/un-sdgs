var expect = require('chai').expect;
var sdgs = require('../src/index.js');

describe('Sustainable Development Goals library tests', function() {
    it('1. should return an array of the 17 goals.', function() {
        var goals = sdgs.listGoals('eng','color');
        expect(goals.length == 17).to.be.true
    })
    it('2. should return an empty array for unavailable languages.', function() {
        var goals = sdgs.listGoals('aaa','color');
        expect(goals.length == 0).to.be.true
    })
    it('3. should return a specific goal.', function() {
        var goal = sdgs.getGoal('eng','color', 1);
        expect(goal.name == 'No Poverty').to.be.true
    })
    it('4. should change json depending on the language - english.', function() {
        var goal = sdgs.getGoal('eng','color', 1);
        expect(goal.json.animationData.nm == 'GoalEngColor1').to.be.true
    })
    it('5. should change json depending on the language - spanish.', function() {
        var goal = sdgs.getGoal('spa','color', 1);
        expect(goal.json.animationData.nm == 'GoalSpaColor1').to.be.true
    })
    it('6. should change json depending on the color - color.', function() {
        var goal = sdgs.getGoal('eng','color', 1);
        expect(goal.json.animationData.nm == 'GoalEngColor1').to.be.true
    })
    it('7. should change json depending on the color - white.', function() {
        var goal = sdgs.getGoal('eng','white', 1);
        expect(goal.json.animationData.nm == 'GoalEngWhite1').to.be.true
    })
})