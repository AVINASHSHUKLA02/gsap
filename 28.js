a=gsap.timeline();

a.to("#main img",{
    opacity:1,
    duration:1,
delay:1,
});
a.from("#nav",{
    y:-200,
    delay:1,
    opacity:0,
    
    });
    a.from("#center h4",{
        x:-1500,
        
        
        
        });
        a.from("#center h1",{
            x:-1700,
            
            
            
            });
            a.from("#center h3",{
                y:10000,
                
                
                
                });
                a.from("#center h2",{
                    y:10000,
                    
                    
                    
                    });
                    a.from("#center button",{
                        x:10000,
                        
                        
                        
                        });

                        gsap.from("#main",{
                            scale:0,
                            opacity:1,
                            duration:1,
                            scrollTrigger:{
                                trigger:"#main",
                                scroller:"body",
                        
                                start:"top 60%",
                            
                        
                                scrub:true,
                            }
                        
                        });
                        gsap.from("#main2",{
                        
                            scale:0,
                            opacity:1,
                            scrollTrigger:{
                                trigger:"#main2",
                                scroller:"body",
                
                                scrub:true,
                            }
                            
                        });
                        a.to("#main2 img",{
                            opacity:1,
                            duration:1,
                        delay:3                     
                        });
                        a.from("#nav2",{
                            y:-200,
                    opacity:0,
                    duration:1,
                    delay:1,
                                // scrollTrigger:{

                                //     trigger:"#nav2",
                                //     scroller:"body",
                                //     scrub:"true",
                                // }       
                            });
                            a.from("#center2 h4",{
                                x:-1500,
                                
                                
                                
                                });
                                a.from("#center2 h1",{
                                    x:-2700,
                                    
                                    
                                    
                                    });
                                    a.from("#center2 h3",{
                                        y:1000,
                                        
                                        
                                        
                                        });
                                        a.from("#center2 h2",{
                                            y:1000,
                                            
                                            
                                            
                                            });
                                            a.from("#center2 button",{
                                                x:1000,
                                                
                                                
                                                
                                                });
                                               