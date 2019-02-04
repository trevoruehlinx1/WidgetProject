// document.addEventListener("DOMContentLoaded",function(event)
// {
//     console.log("DOM loaded");
//     var searchWidget = document.getElementById("searchWidget");
//     searchWidget.addEventListener("click", checkEvent,true);
// });
function displaySearchResults()
{
    var searchKey = document.getElementById("searchInputBox").value;

    if(searchKey.length  > 2)
    {
        var searchResultsJSON = getSearchResults(searchKey).then(function(json)
        {
            var parsedResults = renderHtml(json);
            document.getElementById("outputLabel").innerHTML = parsedResults;
            console.log(parsedResults);
        });
    }

}
                
function renderHtml(json)
{
    var parsedResults="";

    for(i = 0; i<json.length; i++)
    {
        var cResult = json[i];
        var prodName = cResult.Name;
        var prodId = cResult.Id;
        var prodHtml="<h1>" + prodName + "</h1><br>";
        parsedResults += prodHtml;
    }
        return parsedResults;
}
				
// function init()
// {
//     var searchWidget = document.getElementById("searchWidget");
//     searchWidget.addEventListener("click", checkEvent,true);
// }
				
function getSearchResults(string) 
{
    return new Promise(function(resolve,reject)
    {
        HelloWorld.GetQueryResults(string,function(result, event){
        console.log(result);
        console.log(event);
        if (event.status)
        {
            resolve(result);
        }
        else
        {
            reject(result,event);
        }
        },
        {escape: true});
    });
}
function checkEvent(e)
{
    e.stopPropagation();
    e.preventDefault();

    // Reference to clicked element
    var target = e.target;
    var href = target.getAttribute('href');

    // A, DIV, BUTTON
    var elemType = target.nodeName; // => A

    alert('you clicked the '+ elemType);

    // I think... maybe.... could be wrong
    window.location = href;

    return false;
}
function clearResults()
{
	document.getElementById("searchInputBox").value=""
	document.getElementById("outputLabel").innerText="";
}
//window.onload = init;
	