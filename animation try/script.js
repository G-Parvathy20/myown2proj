function choose(){
    var tail=document.getElementById('mymarquee');
    tail.stop();
}
    document.getElementById('redlight').addEventListener('click', function(){
            choose();
        
    });
    
    
    function yellowclr(){
    var head=document.createElement('p');
    head.textContent="Get Ready to ride........";
    head.style.fontSize='36px';
    head.style.position = 'fixed';
    head.style.top = '50%';
    head.style.left = '50%';
    head.style.transform = 'translate(-50%, -50%)';
    head.style.zIndex = '9999';
    document.body.appendChild(head);

    setTimeout(function() {
        head.remove();
    }, 2000);
    }
    document.getElementById('one').addEventListener('click', function(){
            yellowclr();
        });


        function green(){
            starting=document.getElementById('mymarquee');
            starting.start();
        }
        document.getElementById('two').addEventListener('click', function(){
            green();
    });
    
