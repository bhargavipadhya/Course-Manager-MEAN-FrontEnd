export class EnrollmentServiceClient {

  findEnrollmentsForSection(sectionId) {
    return fetch('https://bhargavi-padhya-mean-server.herokuapp.com/api/section/SID'.replace('SID', sectionId), {
      credentials: 'include'
    })
      .then(response => response.json());
  }

}
