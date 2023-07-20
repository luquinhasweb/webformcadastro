function doGet() {
    return HtmlService.createTemplateFromFile('index').evaluate()
  }
  function getUrl(){
    var url = ScriptApp.getService().getUrl();
    return url;
  }
  function doPost(e){
   
    var nomealuno = e.parameter.nomealuno;
    var title = e.parameter.title;
    var autor = e.parameter.autor;
    var date = e.parameter.date;
    var page = e.parameter.page;
    var book = e.parameter.book;
  
    var planilha = SpreadsheetApp.openById('Atividadde1')
  
    var tabela = planilha.getSheetByName('1VjtzA6VDl2_svtCGYONO1k7fW6n_FXQDXw-Z5gY3mUY')
  
    tabela.appendRow([nomealuno,title,autor,date,page,book])
  }