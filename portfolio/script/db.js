import {createClient} from './@supabase/supabase-js'

class SupbaseDatabase {

  constructor() {
    const supabaseUrl = 'https://dhbsdanmyarnqhiuhjom.supabase.co'
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoYnNkYW5teWFybnFoaXVoam9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2NDk2ODEsImV4cCI6MjA0NzIyNTY4MX0.EJvy21VEsZNZ4u-yRorazYi9WCpLIhn67GjUiESCKvo"
    const supabase = createClient(supabaseUrl, supabaseKey)
  }

  async insertData(name, email, phno, message) {
    if (typeof (name) == string || typeof (email) == string || typeof (phno) == Number || typeof (message) == string) {
      if (name.length() != 0 || email.length() != 0 || phno.length() != 0 || message.length() != 0) {
       
        const { error } = await supabase
          .from('c')
          .insert({ id: 1, name: name,email: email,phno: phno,message: message })

      }
    }
  }

}

export default  db = new SupbaseDatabase()
