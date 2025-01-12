tailwind.config = {
    theme:{
        extend:{

            gridTemplateColumns:{
                'auto':'repeat(auto-fit, minmax(200px, 1fr))',
                'mobile':'repeat(auto-fit, minmax(50px, 1fr))'
            },
            fontFamily:{
                Outfit:["Outfit", "sans-serif"],
                Ovo:["Ovo", "sans-serif"]
            },
            animation:{
                spin_slow:'spin 7s linear infinite'
            },
            colors:{
                lightHover:"#dfedff",
                darktHover:"#2a004a",
                darkTheme:"#060515"
            },
            boxShadow:{
                'black':"4px 4px 0 #000",
                'white':"4px 4px 0 #fff",
                'lightBlue':"0 4px 55px #dfedff"
            }
        },
      
    },
    darkMode:'selector'
    
}