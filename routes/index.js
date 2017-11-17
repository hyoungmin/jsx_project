exports.index = function(req, res){


  //나중에 여기다가 내용을 직접 req에서 받아온 무언가로 불러와서 읽으면 되지!
  res.render('index', {
    name: 'John',
    title:'jsx',
    boardTitle:'first',
    boardBody:'Hello jsx world!'
  });
};
