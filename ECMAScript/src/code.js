  window.onload = function(){
  fetch('https://worldcup.sfg.io/matches/').then(response => {
    return response.json();
  }).then(data => {
 
for(index in data){
    if(data[index].away_team_country!=null){
    $("#myTable").append("<tr><td>"+data[index].location+"<td>"+data[index].home_team_country+"</td><td>"+data[index].away_team_country+"</td><td>"+data[index].home_team.goals+"  -  "+data[index].away_team.goals +"</td</tr>")
    }
  } 
  }).catch(err => {console.log(err)
  });
 

  
const inputSource = Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
.map(e=>e.target.value)
.switchMap(v=> {
    return Rx.Observable.from(getTeam(v))
})

 inputSource.subscribe(x=>{
    
      fetch(x.url).then(response => {
        return response.json();
      }).then(data => {
        
      
       for(index in data){
           
        if(data[index].away_team_country!=null){
           
        $("#myTable").prepend("<tr><td>"+data[index].location+"<td>"+data[index].home_team_country+"</td><td>"+data[index].away_team_country+"</td><td>"+data[index].home_team.goals+"  -  "+data[index].away_team.goals +"</td</tr>")
        } 
    }
    }).catch()})
 
function getTeam(name){
     return fetch("https://worldcup.sfg.io/matches/country?fifa_code="+name)
}
  }
  