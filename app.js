var s = skrollr.init({
    constants: {
      tt: 200
    },
    render: function (data) {
        $('#info').text(data.curTop);
    }
});