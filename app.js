const candidates = [
  ['LOC4329464','2','+2.74','Yes','3'],['LOC4335562','4','+2.46','Yes','3'],['LOC4329812','2','+2.28','Yes','3'],['LOC4352160','12','+2.12','Yes','3'],['LOC4340879','6','+1.83','Yes','3'],['LOC4332814','3','+1.74','Yes','3'],['LOC4328047','2','+1.62','Yes','3'],['LOC4342943','7','−1.60','Yes','3'],['LOC4351664','12','−1.58','Yes','3'],['LOC4325621','1','+1.99','ML neighborhood','3']
];
document.getElementById('candidate-rows').innerHTML = candidates.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td></tr>`).join('');
