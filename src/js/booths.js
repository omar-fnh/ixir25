booths=[];
SpreadSheetURL="https://sheets.googleapis.com/v4/spreadsheets/1Wg1kxUHjC5anHNMRJI9ogfLo7FFsTQ_GRqBXiu5CXSc/values/Booths?key=AIzaSyAyGGQCjLa76kq8Sb0P3bab0Ajp36qjA14";

function getDataFromSpreadsheet(SpreadSheetURL,callbackfn){
    fetch(SpreadSheetURL).then(res => res.json()).then(json => {
      const data = [] /* this array will eventually be populated with the contents of the spreadsheet's rows */
      const rows = json.values
  
      for(const row of rows) {
        const formattedRow = {}
  
              if  (row!==rows[0])
              {
                for(const key in row) {
                  if(key=="0"){formattedRow["reserved"] = (row[key]=="TRUE")?true:false;};
                  if(key=="1"){formattedRow["online"] =  (row[key]=="TRUE")?true:false;};
                   if(key=="2"){formattedRow["id"] = row[key]};
                   if(key=="3"){formattedRow["type"] = row[key]};
                   
                   if(key=="5"){formattedRow["width"] = row[key]};
                   if(key=="6"){formattedRow["height"] = row[key]};
                   if(key=="7"){formattedRow["company"] = row[key]};

                   if(key=="9"){formattedRow["category"] = row[key]};
                   if(key=="10"){formattedRow["link"] = row[key]};
                   if(key=="11"){formattedRow["image"] = row[key]};

                   if(key=="14"){formattedRow["path"] = row[key]};

                                      }                        
                 data.push(formattedRow)
               }
      }
      callbackfn(data);
    })
  
  }


callbackFn=function(data){
    booths=[];
        for(row of data){booths.push(row);}
        VueApp.booths=booths;
        //console.log(JSON.stringify(booths)  )
        if(typeof showThisBooth=="string"){setTimeout(function(){scrollToTheBooth()}, 1000);}
    }




