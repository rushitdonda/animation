var tl= gsap.timeline({
    repeat: 30
}); 

tl
.to(".r",{
    ease: Expo.easeInOut,
    width: "100%",
    stagger:2
},'a')

.to(".text h1",{
    ease: Expo.easeInOut,
    stagger: 2,
    top: 0
},'a')
.to(".text h1",{
    ease: Expo.easeInOut,
    stagger: 2,
    top: "-100%",
    delay: 2
},'a')
