       // Temporary Function for Message Toggle in Responsive
       let msgPreviewBlock = document.querySelector(".message-preview");
       let msgPreview = document.querySelectorAll(".message-preview .preview-list");
       let msgDetailed = document.querySelector(".message-detailed-block");
       let goBackBtn = document.querySelector(".goback-msg-btn");

       let getDeviceWidth = () => {
           if (typeof (window.innerWidth) == 'number') {
               //Non-IE
               return window.innerWidth;
           } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
               //IE 6+ in 'standards compliant mode'
               return document.documentElement.clientWidth;
           } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
               //IE 4 compatible
               return document.body.clientWidth;
           }
           return 0;
       }

       if (getDeviceWidth() < 768) {
           goBackBtn.addEventListener('click', () => {
               msgDetailed.classList.remove('d-block');
               msgPreviewBlock.classList.remove('d-none')
           })
           msgPreview.forEach((msg) => {
               msg.addEventListener('click', () => {
                   msgDetailed.classList.add('d-block');
                   msgPreviewBlock.classList.add('d-none')
               })
           })
       }