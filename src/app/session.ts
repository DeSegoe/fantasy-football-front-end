export class Session {
    activeSession: boolean = false;
    isLoggedIn(): boolean {
        return this.activeSession;
    }
}
