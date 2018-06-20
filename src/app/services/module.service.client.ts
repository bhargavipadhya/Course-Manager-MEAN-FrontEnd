export class ModuleServiceClient {

  MODULE_URL = 'https://bhargavi-webdev-18.herokuapp.com/api/course/CID/module';

  findModulesForCourse(courseId) {
    return fetch(this.MODULE_URL.replace('CID', courseId))
      .then(response => response.json());
  }
}
