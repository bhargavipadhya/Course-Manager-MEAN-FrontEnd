export class SectionServiceClient{

  SECTION_URL = 'https://bhargavi-padhya-mean-server.herokuapp.com/api/course/CID/section';

  createSection(courseId, seats, sectionName){

    const section = {courseId, seats, sectionName};

    return fetch(this.SECTION_URL.replace('CID', courseId), {
      method: 'post',
      headers: {'content-type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify(section)
    });
  }

  findSectionsForStudent(){
    const url = 'https://bhargavi-padhya-mean-server.herokuapp.com/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findSectionsForCourse(courseId){
    return fetch(this.SECTION_URL.replace('CID', courseId))
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId){
    const section_url = 'https://bhargavi-padhya-mean-server.herokuapp.com/api/section/' + sectionId + '/enrollment';
    return fetch(section_url, {
      method: 'post',
      credentials: 'include'
    });
  }

  disenrollStudent(sectionId){
    return fetch('https://bhargavi-padhya-mean-server.herokuapp.com/api/student/section/SID'.replace('SID', sectionId), {
      method: 'delete',
      credentials: 'include'
    });
  }

}
