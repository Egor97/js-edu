/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
    let fullTimeEducation = 800;
    let fullTimeEducationWithoutProgrammingSkills = fullTimeEducation + 500;
    let value = 0;

    if(knowsProgramming == true){
      if(focus == 'family'){
        value = fullTimeEducation/config['family'];
      }else if(focus == 'friends'){
        value = fullTimeEducation/config['friends'];
      }else if(focus == 'normal_life'){
        value = fullTimeEducation/config['normal_life'];
      }else if(focus == 'carrier'){
        value = fullTimeEducation/config['carrier'];
      }else if(focus == 'top_peformance'){
        value = fullTimeEducation/config['top_peformance'];
      }else if(focus == 'profession'){
        value = fullTimeEducation/config['profession'];
      }
    }else if(knowsProgramming == false){
      if(focus == 'family'){
        value = fullTimeEducationWithoutProgrammingSkills/config['family'];
      }else if(focus == 'friends'){
        value = fullTimeEducationWithoutProgrammingSkills/config['friends'];
      }else if(focus == 'normal_life'){
        value = fullTimeEducationWithoutProgrammingSkills/config['normal_life'];
      }else if(focus == 'carrier'){
        value = fullTimeEducationWithoutProgrammingSkills/config['carrier'];
      }else if(focus == 'top_peformance'){
        value = fullTimeEducationWithoutProgrammingSkills/config['top_peformance'];
      }else if(focus == 'profession'){
        value = fullTimeEducationWithoutProgrammingSkills/config['profession'];
      }
    }

    return Math.ceil(value);
  };
  