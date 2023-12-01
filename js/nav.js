function initTabMenu (){
    const tabContent = document.querySelectorAll('[data-tab="content"] > div')
    const tabMenu = document.querySelectorAll('[data-tab="menu"] button')
    const tabNav = document.querySelectorAll('[data-tab="nav"] button')
    const tabOp = document.querySelectorAll('[data-tab="op"] button')
  
  
    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add("ativo")
        function activeTab(index) {
          tabContent.forEach((section)=>{
          section.classList.remove("ativo")
        })
          const direction = tabContent[index].dataset.anime;
          tabContent[index].classList.add("ativo", direction)
        }
          tabMenu.forEach((itemMenu, index)=>{
          itemMenu.addEventListener("click", ()=> { 
          activeTab(index)
        })
      })
    }


    if((tabOp.length && tabContent.length)){
        tabContent[0].classList.add("ativo")
        function activeTab(index) {
          tabContent.forEach((section)=>{
          section.classList.remove("ativo")
        })
          const direction = tabContent[index].dataset.anime;
          tabContent[index].classList.add("ativo", direction)
        }
          tabOp.forEach((itemOp, index)=>{
          itemOp.addEventListener("click", ()=> { 
          activeTab(index)
        })
      })
    }

    if((tabNav.length && tabContent.length)){
        tabContent[0].classList.add("ativo")
        function activeTab(index) {
          tabContent.forEach((section)=>{
          section.classList.remove("ativo")
        })
          const direction = tabContent[index].dataset.anime;
          tabContent[index].classList.add("ativo", direction)
        }
          tabNav.forEach((itemNav, index)=>{
          itemNav.addEventListener("click", ()=> { 
          activeTab(index)
        })
      })
    }
  
    if(tabNav.length && tabMenu.length){
        tabMenu[0].classList.add("press")
        function activeTab(index) {
          tabMenu.forEach((section)=>{
          section.classList.remove("press")
        })
          const direction = tabMenu[index].dataset.anime;
          tabMenu[index].classList.add("press", direction)
        }
          tabMenu.forEach((itemMenu, index)=>{
          itemMenu.addEventListener("click", ()=> { 
          activeTab(index)
        })
      })
          tabNav.forEach((itemMenu, index)=>{
          itemMenu.addEventListener("click", ()=> { 
          activeTab(index)
        })
      })
          tabOp.forEach((itemMenu, index)=>{
          itemMenu.addEventListener("click", ()=> { 
          activeTab(index)
        })
      })
    }
  
  
    if(tabNav.length && tabOp.length){
        tabOp[0].classList.add("pressed")
        function activeTab(index) {
          tabOp.forEach((section)=>{
          section.classList.remove("pressed")
        })
          const direction = tabOp[index].dataset.anime;
          tabOp[index].classList.add("pressed", direction)
        }
          tabOp.forEach((itemOp, index)=>{
          itemOp.addEventListener("click", ()=> { 
          activeTab(index)
        })
      })
          tabNav.forEach((itemOp, index)=>{
          itemOp.addEventListener("click", ()=> { 
          activeTab(index)
        })
      })
      
    }
 

    if(tabMenu.length && tabNav.length ){
      tabNav[0].classList.add("pression")
      function activePress(index) {
        tabNav.forEach((button)=>{
        button.classList.remove("pression")
      })
        const press_btn = tabNav[index].dataset.anime;
        tabNav[index].classList.add("pression", press_btn)
      }
        tabMenu.forEach((itemNav, index)=>{
        itemNav.addEventListener("click", ()=> { 
        activePress(index)
      })
    })
    }

    if(tabOp.length && tabNav.length ){
      tabNav[0].classList.add("pression")
      function activePress(index) {
        tabNav.forEach((button)=>{
        button.classList.remove("pression")
      })
        const press_btn = tabNav[index].dataset.anime;
        tabNav[index].classList.add("pression", press_btn)
      }
        tabOp.forEach((itemNav, index)=>{
        itemNav.addEventListener("click", ()=> { 
        activePress(index)
      })
    })
    }


    if(tabMenu.length && tabNav.length ){
      tabNav[0].classList.add("pression")
      function activePress(index) {
        tabNav.forEach((button)=>{
        button.classList.remove("pression")
      })
        const press_btn = tabNav[index].dataset.anime;
        tabNav[index].classList.add("pression", press_btn)
      }
        tabNav.forEach((itemMenu, index)=>{
        itemMenu.addEventListener("click", ()=> { 
        activePress(index)
      })
    })
    }

    if(tabMenu.length && tabOp.length ){
      tabOp[0].classList.add("pressed")
      function activePress(index) {
        tabOp.forEach((button)=>{
        button.classList.remove("pressed")
      })
        const press_btn = tabOp[index].dataset.anime;
        tabOp[index].classList.add("pressed", press_btn)
      }
        tabMenu.forEach((itemOp, index)=>{
        itemOp.addEventListener("click", ()=> { 
        activePress(index)
      })
    })
    }


  }
  initTabMenu();