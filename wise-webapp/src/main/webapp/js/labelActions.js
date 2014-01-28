function createLabelItem(data) {
    if (data.color == "") {
        data.color = "#000000";
    }
    $("#foldersContainer").find("ul").append(
        $("<li data-filter=\""  + data.title  + "\">").append(
            "<a href=\"#\"> <i class=\"icon-tag\"></i>" +
                "<div class='labelColor' style='background: " +  data.color + "'></div>" +
                "<div class='labelName'>" + data.title + "</div>" +
            "</a>"
        )
    )

}

function fetchLabels() {
    jQuery.ajax("c/restful/labels/", {
        async:false,
        dataType:'json',
        type:'GET',
        success:function (data) {
            var labels = data.labels;
            for (var i = 0; i < labels.length; i++) {
                createLabelItem(labels[i])
            }
        },
        error:function (jqXHR, textStatus, errorThrown) {
            $('#messagesPanel div').text(errorThrown).parent().show();
        }
    });
}