const crypto={
    a:0,
    b:1,
    value(txt){
      this.a=txt      
      return this
    },
    encode(){
        let txt=this.a
        let s = "";
        for (let i = 0; i < txt.length; i++) {
          let code1 = (txt.charCodeAt(i) + 7) * 11;
          let icode = String.fromCodePoint(i*1);
          let code2 = String.fromCodePoint(code1);
          s += code2 + icode;
        }
        this.b=s
        console.log(s);
        return this
    },
    decode(){
        let txt=this.b
        let res=''
        for (let i = 0; i < txt.length; i+=2) {
            let code1=txt.charCodeAt(i)/11-7
            let code2=String.fromCodePoint(code1)
            res+=code2
        }
        console.log(res);
        return this

    }

}


crypto.value("men").encode().decode();
