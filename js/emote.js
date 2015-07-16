$(function() {
    function reposition() {
        var container = $('.emote-container');
        var newTop = 0;
        if (container.height() < $(window).height()) {
            newTop = ($(window).height() - container.height()) / 2;
        }
        container.offset({ top: newTop });
    }
    $(window).load(reposition);
    $(window).resize(reposition);
});
