
function generateDefaultOptions(jsonPath, loop, autoplay) {
    return {
        loop,
        autoplay,
        animationData: require(jsonPath)
    }
}

const sdgs = [
    {
        id: 0,
        number: 1,
        color: '#e5243b',
        nameEng: 'No Poverty',
        nameSpa: 'Fin de la Pobreza'
    },
    {
        id: 1,
        number: 2,
        color: '#dda63a',
        nameEng: 'Zero Hunger',
        nameSpa: 'Hambre Cero'
    },
    {
        id: 2,
        number: 3,
        color: '#4c9f38',
        nameEng: 'Good Health and Well-being',
        nameSpa: 'Salud y Bienestar'
    },
    {
        id: 3,
        number: 4,
        color: '#c5192d',
        nameEng: 'Quality Education',
        nameSpa: 'Educación de Calidad'
    },
    {
        id: 4,
        number: 5,
        color: '#ff3a21',
        nameEng: 'Gender Equality',
        nameSpa: 'Igualdad de Género'
    },
    {
        id: 5,
        number: 6,
        color: '#26bde2',
        nameEng: 'Clean Water and Sanitation',
        nameSpa: 'Agua Limpia y Saneamiento'
    },
    {
        id: 6,
        number: 7,
        color: '#fcc30b',
        nameEng: 'Affordable and Clean Energy',
        nameSpa: 'Energía Asequible y No Contaminante'
    },
    {
        id: 7,
        number: 8,
        color: '#a21942',
        nameEng: 'Decent Work and Economic Growth',
        nameSpa: 'Trabajo Decente y Crecimiento Económico'
    },
    {
        id: 8,
        number: 9,
        color: '#fd6925',
        nameEng: 'Industry, Innovation and Infrastructure',
        nameSpa: 'Industria, Innovación e Infraestructura'
    },
    {
        id: 9,
        number: 10,
        color: '#dd1367',
        nameEng: 'Reduced Inequalities',
        nameSpa: 'Reducción de las Desigualdades'
    },
    {
        id: 10,
        number: 11,
        color: '#fd9d24',
        nameEng: 'Sustainable Cities and Communities',
        nameSpa: 'Ciudades y Comunidades Sostenibles'
    },
    {
        id: 11,
        number: 12,
        color: '#be8b2e',
        nameEng: 'Responsible Consumption and Production',
        nameSpa: 'Producción y Consumo Responsables'
    },{
        id: 12,
        number: 13,
        color: '#3f7e44',
        nameEng: 'Climate Action',
        nameSpa: 'Acción por el Clima'
    },{
        id: 13,
        number: 14,
        color: '#0a97d9',
        nameEng: 'Life Below Water',
        nameSpa: 'Vida Submarina'
    },{
        id: 14,
        number: 15,
        color: '#56c02b',
        nameEng: 'Life on Land',
        nameSpa: 'Vida de Ecosistemas Terrestres'
    },{
        id: 15,
        number: 16,
        color: '#00689d',
        nameEng: 'Peace, Justice and Strong Institutions',
        nameSpa: 'Paz, Justicia e Instituciones Sólidas'
    },{
        id: 16,
        number: 17,
        color: '#19486a',
        nameEng: 'Partnerships for the Goals',
        nameSpa: 'Alianzas para Lograr los Objetivos'
    },
];

module.exports = {
    listGoals: function (lang, color, loop = false, autoplay = true) {
        
        //Languages supported: english and spanish
        if (lang != 'eng' && lang != 'spa')
            return [];
        
        //Colors supported: colored and white
        if (color != 'color' && color != 'white')
            return [];
        
        return sdgs.map(sdg => ({
            id: sdg.id,
            number: sdg.number,
            name: (lang == 'eng') ? sdg.nameEng : sdg.nameSpa,
            color: sdg.color,
            json: generateDefaultOptions(`./assets/goals/${lang}/${color}/goal_${sdg.number}.json`, loop, autoplay)
        }))
    },
    getGoal: function(lang, color, number, loop = false, autoplay = true) {
        
        //Languages supported: english and spanish
        if (lang != 'eng' && lang != 'spa')
            return {};

        //Colors supported: colored and white
        if (color != 'color' && color != 'white')
            return {};

        //Sustainable Development Goals are 17
        if (number < 1 || number > 17)
            return {};

        let sdg = sdgs.filter(sdg => sdg.number == number)[0];
        return {
            id: sdg.id,
            number: sdg.number,
            name: (lang == 'eng') ? sdg.nameEng : sdg.nameSpa,
            color: sdg.color,
            json: generateDefaultOptions(`./assets/goals/${lang}/${color}/goal_${number}.json`, loop, autoplay)
        }
    }
}