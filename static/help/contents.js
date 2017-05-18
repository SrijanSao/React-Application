function displaySubs(the_div, the_imageID){

	if (document.getElementById(the_div).style.display==""){
		document.getElementById(the_div).style.display = "none";
		document.getElementById(the_imageID).src="files/images/msbookcl.gif";return
	} else {
		document.getElementById(the_div).style.display = "";
		document.getElementById(the_imageID).src="files/images/msbookop.gif";return
	}
}

function opentopic(obj, topic) {
    obj.style.display = "";
    var objimg = document.getElementById("img_" + topic)
    if (objimg.src.indexOf("msbook") >= 0) {
        objimg.src = "files/images/msbookop.gif";
    }

}

function epandContentsOnLoad() {
    var queryStr = window.location.search.slice(1);
    /* check if index.htm is loaded */
    x = queryStr.toLowerCase().indexOf("index.htm");
    if ((x >= 0) + (queryStr.length == 9)) {
        return;
    }
    var topic = "";
    /* check if query string parameter topic exist */
    x = queryStr.toLowerCase().indexOf("topic=");
    if (x >= 0) {
        topic = "files/" + queryStr.substring(x + 6);
        x = topic.indexOf("&");
        if (x >= 0) {
            topic = topic.substring(0, x);
        }
        var topicdiv = document.getElementById(topic);
        if (topicdiv != null) {
            if (topicdiv.childNodes.length > 0) {
                opentopic(topicdiv, topic);
            }
        } else {
            topicdiv = document.getElementById("img_"+topic);
        }
        var topicparentnode = topicdiv.parentNode;
        var parentid = topicparentnode.id;
        var oldid = "";
        var parentdiv = document.getElementById(parentid);
        do {
            if (parentid.indexOf(".1") >0) {
                parentdiv = document.getElementById(parentid);
                topicparentnode = parentdiv.parentNode;
                parentid = topicparentnode.id;
            }
            if (parentid.length > 0) {
                opentopic(parentdiv, parentid);
                parentdiv = document.getElementById(parentid);
                topicparentnode = parentdiv.parentNode;
                oldid = parentid;
                parentid = topicparentnode.id;

                if ((parentid == oldid)||(parentid == "")) {
                    parentid = "";
                } else { parentdiv = document.getElementById(parentid); }
            }
        }
        while (parentid);

    } else {

        var cdiv = document.getElementsByTagName('div');
        var cimg = document.getElementsByTagName('img');
        var root = "";
        if (cdiv[0].id.indexOf('set') > -1) { root = "set"; }
        if (cdiv[0].id.indexOf('book') > -1) { root = "book"; }

        for (i = cdiv.length; i--; ) {
            if ((cdiv[i].id.indexOf(root) > -1) && (cdiv[i].id.indexOf('.1') > -1)) {
                cdiv[i].style.display = "";
            }
        }
        for (i = cimg.length; i--; ) {
            if ((cimg[i].id.indexOf(root) > -1) && (cimg[i].id.indexOf('.1') == -1)) {
                if (cimg[i].src.indexOf("msbook") >= 0) {
                    cimg[i].src = "files/images/msbookop.gif";
                }
            }
        }

    }
}

