/*
	Navigation
	Make navigation item active when clicked
*/

$('.docs-navigation a').bind('click', function() {
  $('.docs-navigation li').removeClass('is-active');
  if (!$(this).parent().hasClass('card-title')) {
	$(this).parent().addClass('is-active');
  }
});

/*
	Expand code examples
*/

$('.card-code .action-toggle').click(function(){
	$(this).parent().toggleClass('is-collapsed is-expanded');
	event.preventDefault()
});

/*
	Code exampels
	Copy HTML and escape it for code examples
*/

$(function() {
	var section_container = ".docs-card",
			code_container = ".card-preview",
			markup_container = ".card-code pre code";

		_.each(
			$(section_container),
			function (e) {
				var markup = $(code_container, $(e)).first().html();

			$(markup_container, $(e)).first().html(
				_.escape(markup)
			);
		}
	);
});