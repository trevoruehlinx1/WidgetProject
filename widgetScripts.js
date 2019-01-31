
function displayButtonTestData()
{
    var searchKey = document.getElementById("searchInputBox").value;
    var searchResultsJSON = getSearchResults(searchKey).then(function(json)
    {
        var parsedResults = renderHtml(json);
        document.getElementById("outputLabel").innerHTML = parsedResults;
        console.log(parsedResults);
    });
}
            	
function renderHtml(json)
{
    var parsedResults = "";
    for(i = 0; i<json.length; i++)
    {
        var cResult = json[i];
        var prodName = cResult.Name;
        var prodId = cResult.Id;
        var prodHtml="<a href='/"+prodId+"' >"+ prodName + "ID:"+prodId+"</a><br>";
        parsedResults += prodHtml;
    }
        return parsedResults;
 }
           
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
function checkEvent{
    alert = "you clicked me."
}
function Init()
{
    var searchWidget = getElementById("searchWidget");
    searchWidget.addEventListener("click",checkEvent,true);
}

