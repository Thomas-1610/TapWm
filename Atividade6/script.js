let surveyData = [];

function addSurveyData() {
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const opinion = parseInt(document.getElementById('opinion').value);

    surveyData.push({ age, gender, opinion });
    calculateResults();
}

function calculateResults() {
    if (surveyData.length === 0) return;

    const totalAge = surveyData.reduce((sum, person) => sum + person.age, 0);
    const averageAge = totalAge / surveyData.length;

    const ages = surveyData.map(person => person.age);
    const oldestAge = Math.max(...ages);
    const youngestAge = Math.min(...ages);

    const worstCount = surveyData.filter(person => person.opinion === 1).length;

    const bestCount = surveyData.filter(person => person.opinion === 4 || person.opinion === 3).length;
    const bestPercentage = (bestCount / surveyData.length) * 100;

    const genderCount = surveyData.reduce((count, person) => {
        count[person.gender] = (count[person.gender] || 0) + 1;
        return count;
    }, {});

    document.getElementById('averageAge').innerText = `Média da idade: ${averageAge.toFixed(2)}`;
    document.getElementById('oldestAge').innerText = `Idade da pessoa mais velha: ${oldestAge}`;
    document.getElementById('youngestAge').innerText = `Idade da pessoa mais nova: ${youngestAge}`;
    document.getElementById('worstCount').innerText = `Quantidade de pessoas que responderam péssimo: ${worstCount}`;
    document.getElementById('bestPercentage').innerText = `Porcentagem de ótimo e bom: ${bestPercentage.toFixed(2)}%`;
    document.getElementById('genderCount').innerText = `Número de respostas por gênero: ${JSON.stringify(genderCount)}`;
}
