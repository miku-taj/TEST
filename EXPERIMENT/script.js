document.addEventListener("DOMContentLoaded", function (event) {
  // array with texts to type in typewriter
  var dataText = [
    "В частности, новая модель организационной деятельности предполагает независимые способы реализации стандартных подходов. Лишь активно развивающиеся страны третьего мира описаны максимально подробно! Ясность нашей позиции очевидна: курс на социально-ориентированный национальный проект предполагает независимые способы реализации как самодостаточных, так и внешне зависимых концептуальных решений. В целом, конечно, убеждённость некоторых оппонентов представляет собой интересный эксперимент проверки экономической целесообразности принимаемых решений. Приятно, граждане, наблюдать, как ключевые особенности структуры проекта преданы социально-демократической анафеме! С учётом сложившейся международной обстановки, современная методология разработки играет важную роль в формировании своевременного выполнения сверхзадачи. С другой стороны, перспективное планирование влечет за собой процесс внедрения и модернизации экспериментов, поражающих по своей масштабности и грандиозности. Предварительные выводы неутешительны: синтетическое тестирование предоставляет широкие возможности для форм воздействия. Предварительные выводы неутешительны: реализация намеченных плановых заданий создаёт предпосылки для модели развития! Банальные, но неопровержимые выводы, а также элементы политического процесса являются только методом политического участия и своевременно верифицированы.",
  ];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector("p").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
