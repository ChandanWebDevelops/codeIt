(function () {

  const codemirror = CodeMirror(document.getElementById("editorHtml"), {
    mode: 'xml',
  })

  // keymap を指定
  codemirror.setOption('extraKeys', {
    'Cmd-E': function() {
      snippet()
    },
    'Ctrl-E': function() {
      snippet()
    }
  })

  
  const snippets: any[] = [
    { text: 'const', displayText: 'const declarations' },
    { text: 'let', displayText: 'let declarations' },
    { text: 'var', displayText: 'var declarations' },
  ]

  function snippet(): void {
    CodeMirror.showHint(codemirror, function (): any {
      const cursor = codemirror.getCursor()
      const token = codemirror.getTokenAt(cursor)
      const start: number = token.start
      const end: number = cursor.ch
      const line: number = cursor.line
      const currentWord: string = token.string

      
      const list: any[] = snippets.filter(function (item): boolean {
        return item.text.indexOf(currentWord) >= 0
      })

      return {
        list: list.length ? list : snippets,
        from: CodeMirror.Pos(line, start),
        to: CodeMirror.Pos(line, end)
      }
    }, { completeSingle: false })
  }
})()

(function () {

  const codemirror = CodeMirror(document.getElementById("editorJs"), {
    mode: 'xml',
  })

  /
  codemirror.setOption('extraKeys', {
    'Cmd-E': function() {
      snippet()
    },
    'Ctrl-E': function() {
      snippet()
    }
  })

  
  const snippets: any[] = [
    { text: 'const', displayText: 'const declarations' },
    { text: 'let', displayText: 'let declarations' },
    { text: 'var', displayText: 'var declarations' },
  ]

  function snippet(): void {
    CodeMirror.showHint(codemirror, function (): any {
      const cursor = codemirror.getCursor()
      const token = codemirror.getTokenAt(cursor)
      const start: number = token.start
      const end: number = cursor.ch
      const line: number = cursor.line
      const currentWord: string = token.string

      
      const list: any[] = snippets.filter(function (item): boolean {
        return item.text.indexOf(currentWord) >= 0
      })

      return {
        list: list.length ? list : snippets,
        from: CodeMirror.Pos(line, start),
        to: CodeMirror.Pos(line, end)
      }
    }, { completeSingle: false })
  }
})()


var editorHtml = CodeMirror.fromTextArea(document.getElementById("editorHtml"),
{   
    lineNumbers: true,
    tabSize: 4,
    mode: "xml",
    theme: "material-darker",
    autoCloseTags: true,
    lint:true,
    hint:true,
    comments:true
});

var editorCss = CodeMirror.fromTextArea(document.getElementById("editorCss"),
{
    lineNumbers: true,
    tabSize: 4,
    mode: "css",
    theme: "material-darker",
    autoCloseBrackets: true,
    styleActiveLine:true,
    lint:true,
    hint:true,
    comments:true
});

var editorJs = CodeMirror.fromTextArea(document.getElementById("editorJs"),
{
    lineNumbers: true,
    tabSize: 4,
    mode: "javascript",
    theme: "material-darker",
    autoCloseBrackets: true,
    autoMatchBrackets:true,
    lint:true,
    hint:true,
    comments:true
});




document.addEventListener("DOMContentLoaded", () => {
    //...
    document.getElementById("main").style.width = window.innerWidth + "px";
    document.getElementById("main").style.height = window.innerHeight + "px";

    var sizes = {
        "win1" : 0.5,
        "win3" : 0.75,
        "win4" : 0.5,
        "win6" : 0.4,
        "win11" : 0.8,
        "win9" : 0.5,
        "win13" : 0.4 
    };

    //let resizerThickness = 10;
    //Resizable.initialise("main", sizes, resizerThickness);
    Resizable.initialise("main", {});

});

window.addEventListener("resize", () => {
    Resizable.activeContentWindows[0].changeSize(window.innerWidth, window.innerHeight);
    Resizable.activeContentWindows[0].childrenResize();
});



var a1 = document.getElementById("a1")
var a2 = document.getElementById("a2")
var a3 = document.getElementById("a3")


a1.addEventListener("click", function () {
    text = editorHtml.getValue();
    downloadHtml(text)
})

a2.addEventListener("click", function () {
    text = editorCss.getValue();
    downloadCss(text)
})

a3.addEventListener("click", function () {
    text = editorJs.getValue();
    downloadJs(text)
})


function downloadHtml(textarea){
    const blob = new Blob([textarea], {type:"text/html"})
    a1.href = URL.createObjectURL(blob)
}

function downloadCss(textarea){
    const blob = new Blob([textarea], {type:"text/css"})
    a2.href = URL.createObjectURL(blob)
}

function downloadJs(textarea){
    const blob = new Blob([textarea], {type:"text/js"})
    a3.href = URL.createObjectURL(blob)
}



// Save function Useing

document.getElementById("Save").addEventListener('click',function (){
    var html = editorHtml.getValue();
    var css = editorCss.getValue();
    var js = editorJs.getValue();

    a1.click();
    a2.click();
    a3.click();

    alert("Don't forgot to connect CSS and Javascript files to HTML files")

})

// Preview settings
var newWindow;
function openWin (){
    // live Preview
    
    newWindow = window.open("", "newWindow", "width=900, height=600");

    html = editorHtml.getValue();
    css = "<style>"+editorCss.getValue()+"</style>";
    js = editorJs.getValue();

    newWindow.document.body.innerHTML = html+css;
    newWindow.eval(js) 
    
}



document.getElementById("preview").addEventListener("click", openWin)


document.getElementById("TriBar").addEventListener("click", function () {
    var option = document.getElementsByClassName("option2")[0]
    var main = document.getElementById("main")
    if (option.style.display != "none"){
        option.style.display = "none";
        main.style = "margin-top: 60px !important"
    }else{
        option.style.display = "flex";
        main.style = "margin-top:147px !important"
    }
})

var preview2 = document.getElementById("Preview2")
var save2 = document.getElementById("Save2")

preview2.addEventListener("click", openWin)


save2.addEventListener('click',function (){
    var html = editorHtml.getValue();
    var css = editorCss.getValue();
    var js = editorJs.getValue();

    a1.click();
    a2.click();
    a3.click();

    alert("Don't forgot to connect CSS and Javascript files to HTML files")

})













