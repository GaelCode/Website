let compte = JSON.parse(localStorage.getItem('compte')) || [['root', 'superior',]];

let toDo = JSON.parse(localStorage.getItem('toDo'))  || {'root':
                                                        {'Personnel': 
                                                        [['survivre' ,'16h', '27 janvier', 'manger des cerises']],
                                                        'Travail':
                                                        [['bosser', '16h', '1 fevrier', 'faire le site']],
                                                        'Important':
                                                        [['sortie','12h', '2 fevrier', 'Repas de famille']]}};