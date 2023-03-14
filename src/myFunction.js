export const allfilter = (data, filterObj) => {
  let filteringdata = [];

  // console.log("filter:", filterObj.getAll("color"));
  let color = filterObj.getAll("color");
  let gender = filterObj.getAll("gender");
  let price = filterObj.getAll("price");
  let type = filterObj.getAll("type");

  //color filter
  if (color.length) {
    for (let i = 0; i < color.length; i++) {
      let fdata = data.filter((el) => color[i] == el.color);
      filteringdata = [...filteringdata, ...fdata];
    }
  }
  
  //gender filter
  if (gender.length) {
    let gData = []
    if(filteringdata.length){
       gData = filteringdata.filter((el) => gender == el.gender);
    }else{
       gData = data.filter((el) => gender == el.gender);
    }
    filteringdata = [...gData];
    // console.log("gender:", filteringdata);
  }

  console.log(filteringdata)

  // price filter
  if (price?.length) {
    let pData = []
    let min = 0 , max = 0;
    if (price !== null) [min, max] = price[0]?.split("-");
    console.log(min,max);
    if(filteringdata.length){
       pData = filteringdata?.filter((el) => el.price > min && el.price <= max );
    }else{
       pData = data?.filter((el) => el.price > min && el.price <= max );
    }
    console.log(pData)
    filteringdata = [...pData];
  }


  //type filter
  if (type.length) {
   let tData = []
    if(filteringdata.length){
       tData = filteringdata.filter((el) => type == el.type);
    }else{
       tData = data.filter((el) => type == el.type);
    }
    filteringdata = [...tData];
  }

  // console.log("type:", filteringdata);
  return filteringdata.length > 0? filteringdata :  "No Data Found" ;
};
