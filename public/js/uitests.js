$(document).ready(function () {
  $("#paragraphOne").text('This is the new text of Paragraph One, Yo!');

  $(".largeFont").each(function () {
    var thisParagraph = $(this);
    console.log('This paragraph is ', thisParagraph);
    var thisParagraphText = thisParagraph.text();

    // This is the same thing as the two variables above
    var thisParagraphText = $(this).text();

    // Print it to the console!
    console.log('This para text is', thisParagraphText);
  });

});
