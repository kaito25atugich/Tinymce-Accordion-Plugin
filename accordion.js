// plugin 

tinymce.PluginManager.add('accordion', function(editor) {
  editor.ui.registry.addButton('accordion', {
    text: 'accordion',
    onAction: () => {
      editor.windowManager.open({
        title: 'accordion',
        body: {
          type: 'panel',
          items: [
            {
              type: 'input',
              name: 'text',
              layout: 'flow',
              label: 'header name'
            }
          ]
        },
        buttons: [
          {
            type: 'submit',
            name: 'submitButton',
            text: 'ok'
          },
          {
            type: 'cancel',
            name: 'closeButton',
            text: 'cancel'
          }
        ],
        onSubmit: function (e) {
          let data = e.getData().text; // get header name 
          let dataNum = Date.now();   // used to set the id
          let accordion = `  <div class="accordion-wrapper" id="accordionWrapper${dataNum}"> \
                                <div class="accordion-header">${data} \
                                  <div class="accordion-trigger" id="accordionTrigger${dataNum}"></div> \
                                </div> \
                                <div class="accordion-content" id="accordionContent${dataNum}">Content here</div> \
                              </div>`;
          editor.insertContent(accordion);
          e.close(); // close the window
        }
      });
    }
  });
});

// processing
let ProcessingManager = () => {
  let accordionTriggerC = document.getElementsByClassName('accordion-trigger');

  if (accordionTriggerC.length != 0) {
    // get all accordion
    for (let i=0; i< accordionTriggerC.length; i++) {
      let accordionTrigger = document.getElementById(accordionTriggerC[i].getAttribute('id'));

      accordionTrigger.addEventListener('click', (e) => {
        // obtain the id of the desired accordion
        let id = e.target.getAttribute('id').replace('accordionTrigger', '');
        let Trigger = document.getElementById(`accordionTrigger${id}`);
        let Wrapper = document.getElementById(`accordionWrapper${id}`);
        let Content = document.getElementById(`accordionContent${id}`);

        Trigger.classList.toggle('active');
        Content.classList.toggle('active');
        if (Wrapper.classList.contains('active')) {
            Wrapper.classList.remove('active');
            Wrapper.classList.add('deactive');
        } else {
            Wrapper.classList.add('active');
            Wrapper.classList.remove('deactive');
        }
      })
    }
  }
}
