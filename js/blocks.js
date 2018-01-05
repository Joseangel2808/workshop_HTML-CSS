document.addEventListener('DOMContentLoaded', function () {

    var blocks = document.querySelectorAll('.img');

    blocks.forEach(function (block) {

        var imgDiv = block.querySelector('.img div');

        block.addEventListener('mouseover', function () {
            imgDiv.style.display = 'none';
        });

        block.addEventListener('mouseout', function () {
            imgDiv.style.display = 'block';
        })
    })
});