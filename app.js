var fname = document.querySelector('#fname');
$('#fname').on('input', function() {
    var lowerCaseValue = $(this).val().toLowerCase();
    $(this).val(lowerCaseValue);
});
var showText = function (target, message, index, interval) {
    if (index === 0) {
        $(target).empty();
    }

    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () {
            showText(target, message, index, interval);
        }, interval);
    }
}

$(function () {
    showText("#msg", "~DRAGON SWAP", 0, 100);
    showText("#msg1", "AI DEX on AI blockchain", 0, 100);
});

$(document).ready(function () {
    setTimeout("$('#fname').focus();", 500);
});

function checkforblank() {
    if (document.getElementById('fname').value == "help") {
        $('#fname').val('');
        showText("#msg2", 'commands:', 0, 100);
        showText("#msg4", '~ #1 ABOUT, what is goin on ?', 0, 100);
        showText("#msg5", '~ #2 BUY, where i can buy token ?', 0, 100);
        showText("#msg6", '~ #3 AI, what is ai used for?', 0, 100);
        showText("#msg7", '~ #4 LAUNCH, WHEN DEX ?', 0, 100);
        return false;
    }
    if (document.getElementById('fname').value == "about") {
        $('#fname').val('');
        showText("#msg2", 'ABOUT PROJECT', 0, 100);
        showText("#msg3", '~', 0, 100);
        showText("#msg4", '~ THE DRAGON SWAP DEX', 0, 200);
        showText("#msg5", '~ PROFITABLE EXCHANGES', 0, 100);
        showText("#msg6", '~ CASHBACKS', 0, 200);
        showText("#msg7", '~ OUR TOKEN - $DRAG', 0, 300);
        return false;
    }
    if (document.getElementById('fname').value == "buy") {
        $('#fname').val('');
        showText("#msg2", 'WHERE TO BUY ?', 0, 100);
        showText("#msg3", '~', 0, 100);
        showText("#msg4", '~ LAUNCH - MEME.COOKING', 0, 200);
        showText("#msg5", '~ SWAP - REF.FINANCE', 0, 200);
        showText("#msg6", '~ DRAGON SWAP SOON', 0, 100);
        showText("#msg7", '~', 0, 500);
        return false;
    }
    if (document.getElementById('fname').value == "ai") {
        $('#fname').val('');
        showText("#msg2", 'WHAT AI DOING HERE ?', 0, 100);
        showText("#msg3", '~ Dragon SWAP uses AI', 0, 100);
        showText("#msg4", '~ For profitable exchange routing', 0, 200);
        showText("#msg5", '~ AI FIND THE BEST WAY TO SWAP', 0, 100);
        showText("#msg6", '~ $NEAR > $SHITCOIN > $DRAG', 0, 200);
        showText("#msg7", '~ TAKE YOUR PROFIT', 0, 100);
        return false;
    }
    if (document.getElementById('fname').value == "launch") {
        $('#fname').val('');
        showText("#msg2", 'WHEN DEX LAUNCH ?', 0, 100);
        showText("#msg3", '~', 0, 100);
        showText("#msg4", '~ 5 DEC. 2024', 0, 200);
        showText("#msg5", '~ ', 0, 100);
        showText("#msg6", '~ ', 0, 200);
        showText("#msg7", '~ ', 0, 100);
        return false;
    } else {
        $('#fname').val('');
        showText("#msg2", 'ERROR', 0, 100);
        showText("#msg3", '~', 0, 100);
        showText("#msg4", '~ ', 0, 200);
        showText("#msg5", '~ ', 0, 100);
        showText("#msg6", '~ ', 0, 200);
        showText("#msg7", '~ ', 0, 100);
        return false;
    }
}