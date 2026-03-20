export const data = {
    host: {
        name: 'Rap',
        image: './src/assets/images/couple.png'
    },

    time: {
        event: {
            year: '2026',
            month: 'March',
            date: '21',
            day: 'Saturday',
            hours: {
                start: '14.00',
                finish: 'Selesai'
            }
        },
        address: 'Jl. Meteor Raya No. 197, Kec. Sekejati, Kel. Buah Batu'
    },

    link: {
        calendar: 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MXNrcHUwcGx1azA1NGRwdm43cmVhMWE5aTAgb2t0YXZpYW4ucml6a2kxNUBt&tmsrc=oktavian.rizki15%40gmail.com',
        map: 'https://maps.app.goo.gl/tViBpaMDmW82LVFb7',
    },


    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbwR3FpQXcBgFQxENSuwy6X2_MeZlJCgefN1JeK6C-8IwwCauQaQpJs7HKoBhqs_dl6KeA/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'About',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Date & Venue',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Wishes',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
