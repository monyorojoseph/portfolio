const Footer = ()=> {
    return (

    <footer className="w-full bg-stone-200">
      <div className="py-10">        
          <div className="text-center">
              <h6 className="font-semibold text-lg">Socials</h6>            
          </div>

          <div className="flex flex-row items-center justify-center gap-x-3">
              <span>
                  <a href="https://github.com/monyorojoseph" target="_blank" className="flex flex-row items-center">
                      <span>github</span>
                  </a>
              </span>
              <span>
                  <a href="https://www.linkedin.com/in/joseph-monyoro-04188a244/" target="_blank"  className="flex flex-row items-center">
                      <span>linked in</span>
                  </a> 
              </span>

              <span>
                  <a href="https://discordapp.com/users/513367625263349790" target="_blank"  className="flex flex-row items-center">
                      <span>discord</span>
                  </a>
              </span>

          </div>
      </div>
    </footer>
    )
}

export default Footer;