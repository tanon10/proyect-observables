import { Subject } from "rxjs";

export class SubjectManager<T> {
  private subject = new Subject<T>();
  /*Con esto vamos a obtener el subject, no va a emitir datos */
  get getSubject() {
    return this.subject.asObservable();
  }
  /**Con esto vamos a poder controlar los datos que viajan por el subject */
  set setSubject(value: T) {
    this.subject.next(value);
  }
}
