let currentLanguage = 'de';

const webForms = {
    en: `<web-form zone="campai" organisation="662303fb1145fd05bebef19c" form="66237d6d4344dd9e22aac604" css='.sd-root-modern{--base-unit: 4px;--primary: #000000;--primary-foreground: #ffffff;--foreground: #000000;--background: #f3f3f3;--background-dim: #ffffff;--background-dim-light: #f9f9f9;--font-family: initial;flex: 1;}.sv-tagbox__item, .sd-tagbox_clean-button{box-sizing: content-box;}' model='base64;eyJsb2NhbGUiOiJkZSIsInRpdGxlIjp7ImRlIjoiPGJyPiJ9LCJkZXNjcmlwdGlvbiI6eyJkZSI6Ijxicj4ifSwibG9nb1Bvc2l0aW9uIjoicmlnaHQiLCJjb21wbGV0ZWRIdG1sIjp7ImRlIjoiPGgxPlZpZWxlbiBkYW5rIGbDvHIgZGFzIEF1c2bDvGxsZW48L2gxPlxuPHA+RHUgc29sbHRlc3QgZWluZSBFLU1haWwgZXJoYWx0ZW4gaGFiZW4gZGllIER1IGJlc3TDpHRpZ2VuIG11c3N0LiBCaXR0ZSDDvGJlcnByw7xmZSBhdWNoIGRlaW5lbiBTUEFNLU9yZG5lci48L3A+XG4ifSwicGFnZXMiOlt7Im5hbWUiOiJNaXRnbGllZHNhbnRyYWciLCJlbGVtZW50cyI6W3sidHlwZSI6InRleHQiLCJuYW1lIjoiVm9ybmFtZSIsIm1heFdpZHRoIjoiNTAwcHgiLCJ0aXRsZSI6eyJkZSI6IkZpcnN0IE5hbWU8YnI+In0sImlzUmVxdWlyZWQiOnRydWUsImZvcm1hdCI6InRleHQifSx7InR5cGUiOiJ0ZXh0IiwibmFtZSI6Ik5hY2huYW1lIiwibWF4V2lkdGgiOiI1MDBweCIsInN0YXJ0V2l0aE5ld0xpbmUiOmZhbHNlLCJ0aXRsZSI6eyJkZSI6Ikxhc3QgTmFtZTxicj4ifSwiaXNSZXF1aXJlZCI6dHJ1ZSwiZm9ybWF0IjoidGV4dCJ9LHsidHlwZSI6InRleHQiLCJuYW1lIjoiR2VidXJ0c2RhdHVtIiwid2lkdGgiOiIyMTBweCIsIm1pbldpZHRoIjoiMjEwcHgiLCJtYXhXaWR0aCI6IjIxMHB4IiwidGl0bGUiOnsiZGUiOiJCaXJ0aGRheSJ9LCJpc1JlcXVpcmVkIjp0cnVlLCJpbnB1dFR5cGUiOiJkYXRlIiwiZm9ybWF0IjoiZGF0ZSJ9LHsidHlwZSI6ImRyb3Bkb3duIiwibmFtZSI6IkFydCIsIndpZHRoIjoiMjIwcHgiLCJtaW5XaWR0aCI6IjIyMHB4IiwibWF4V2lkdGgiOiIyMjBweCIsInN0YXJ0V2l0aE5ld0xpbmUiOmZhbHNlLCJ0aXRsZSI6eyJkZSI6IlNleCJ9LCJpc1JlcXVpcmVkIjp0cnVlLCJjaG9pY2VzIjpbeyJ2YWx1ZSI6IndlaWJsaWNoIiwidGV4dCI6eyJkZSI6IkZlbWFsZSJ9fSx7InZhbHVlIjoibcOkbm5saWNoIiwidGV4dCI6eyJkZSI6Ik1hbGUifX0sImRpdmVycyJdLCJwbGFjZWhvbGRlciI6eyJkZSI6IkNob29zZS4uLiJ9fV0sInRpdGxlIjp7ImRlIjoiQmVjb21lIGEgbWVtYmVyPGJyPiJ9LCJkZXNjcmlwdGlvbiI6eyJkZSI6IkVudGVyIHlvdXIgZGF0YSE8YnI+In19LHsibmFtZSI6IkFkcmVzc2UiLCJlbGVtZW50cyI6W3sidHlwZSI6InRleHQiLCJuYW1lIjoiU3RyYcOfZSArIE5yLiIsIm1heFdpZHRoIjoiNTAwcHgiLCJ0aXRsZSI6eyJkZSI6IkFkZHJlc3MifSwiaXNSZXF1aXJlZCI6dHJ1ZSwibWluIjowLCJtYXgiOjk5OTk5LCJmb3JtYXQiOiJ0ZXh0In0seyJ0eXBlIjoidGV4dCIsIm5hbWUiOiJQb3N0bGVpdHphaGwiLCJ3aWR0aCI6IjE5MHB4IiwibWluV2lkdGgiOiIxOTBweCIsIm1heFdpZHRoIjoiMTkwcHgiLCJ0aXRsZSI6eyJkZSI6IlBvc3RhbCBDb2RlPGJyPiJ9LCJpc1JlcXVpcmVkIjp0cnVlLCJtaW4iOjk5OSwibWF4Ijo5OTk5OSwic3RlcCI6MSwiZm9ybWF0IjoidGV4dCJ9LHsidHlwZSI6InRleHQiLCJuYW1lIjoiT3J0Iiwid2lkdGgiOiIzMDBweCIsIm1heFdpZHRoIjoiMzAwcHgiLCJzdGFydFdpdGhOZXdMaW5lIjpmYWxzZSwidGl0bGUiOnsiZGUiOiJDaXR5In0sImlzUmVxdWlyZWQiOnRydWUsImZvcm1hdCI6InRleHQifSx7InR5cGUiOiJ0ZXh0IiwibmFtZSI6IkxhbmQiLCJ3aWR0aCI6IjMwMHB4IiwibWF4V2lkdGgiOiIzMDBweCIsInRpdGxlIjp7ImRlIjoiQ291bnRyeSJ9LCJpc1JlcXVpcmVkIjp0cnVlLCJwbGFjZWhvbGRlciI6eyJkZSI6IkRldXRzY2hsYW5kIn0sImZvcm1hdCI6InRleHQifV0sInRpdGxlIjp7ImRlIjoiQWRkcmVzczxicj4ifSwiZGVzY3JpcHRpb24iOnsiZGUiOiJFbnRlciB5b3VyIGFkZHJlc3MhPGJyPiJ9fSx7Im5hbWUiOiJLb21tdW5pa2F0aW9uIiwiZWxlbWVudHMiOlt7InR5cGUiOiJ0ZXh0IiwibmFtZSI6IkUtTWFpbCBBZHJlc3NlIiwid2lkdGgiOiIzMDBweCIsIm1heFdpZHRoIjoiMzAwcHgiLCJ0aXRsZSI6eyJkZSI6IkUtTWFpbCJ9LCJpc1JlcXVpcmVkIjp0cnVlLCJ2YWxpZGF0b3JzIjpbeyJ0eXBlIjoiZW1haWwifV0sImlucHV0VHlwZSI6ImVtYWlsIiwiZm9ybWF0IjoiZW1haWwifV0sInRpdGxlIjp7ImRlIjoiQ29tbXVuaWNhdGlvbiJ9LCJkZXNjcmlwdGlvbiI6eyJkZSI6IkhvdyBjYW4gd2UgcmVhY2ggeW91Pzxicj4ifX0seyJuYW1lIjoiU2VpdGUyIiwiZWxlbWVudHMiOlt7InR5cGUiOiJjaGVja2JveCIsIm5hbWUiOiJBYnRlaWx1bmciLCJ3aWR0aCI6IjMwMHB4IiwibWF4V2lkdGgiOiIzMDBweCIsInRpdGxlIjp7ImRlIjoiPHNwYW4gY2xhc3M9XCJzdi1zdHJpbmctdmlld2VyXCI+PGg1IGNsYXNzPVwic2QtdGl0bGUgc2QtZWxlbWVudF9fdGl0bGUgc2QtcXVlc3Rpb25fX3RpdGxlIHNkLXF1ZXN0aW9uX190aXRsZS0tcmVxdWlyZWRcIiBpZD1cInNxXzExNF9hcmlhVGl0bGVcIiBhcmlhLWxhYmVsPVwiV2llIHZpZWwgQ2FubmFiaXMgYmVuw7Z0aWdzdCBkdSBpbSBNb25hdD9cIj48c3BhbiBjbGFzcz1cInN2LXN0cmluZy12aWV3ZXJcIj5Ib3cgbXVjaCBjYW5uYWJpcyBkbyB5b3UgbmVlZCBwZXIgbW9udGg/PGJyPjwvc3Bhbj48L2g1Pjwvc3Bhbj4ifSwiY2hvaWNlcyI6W3sidmFsdWUiOiJBYnRlaWx1bmcgMSIsInRleHQiOnsiZGUiOiIxLTEwZyJ9fSx7InZhbHVlIjoiQWJ0ZWlsdW5nIDIiLCJ0ZXh0Ijp7ImRlIjoiMTAtMjBnIn19LHsidmFsdWUiOiJBYnRlaWx1bmcgMyIsInRleHQiOnsiZGUiOiIyMC0zMGcifX0seyJ2YWx1ZSI6IkFidGVpbHVuZyA0IiwidGV4dCI6eyJkZSI6IjMwLTQwZyJ9fSx7InZhbHVlIjoiQWJ0ZWlsdW5nIDUiLCJ0ZXh0Ijp7ImRlIjoiNDAtNTBnIn19XX1dLCJ0aXRsZSI6eyJkZSI6Ikdyb3c8YnI+In0sImRlc2NyaXB0aW9uIjp7ImRlIjoiU2VsZWN0IHRoZSBtb250bHkgYW1vdW50IHlvdSBzbW9rZSE8YnI+In19LHsibmFtZSI6IlNlaXRlMSIsImVsZW1lbnRzIjpbeyJ0eXBlIjoiZHJvcGRvd24iLCJuYW1lIjoiU3RhbmRhcmQgZsO8ciBaYWhsdW5nIiwid2lkdGgiOiIxMDAlIiwidGl0bGUiOnsiZGUiOiJTdGFuZGFyZCBwYXltZW50IG1ldGhvZDxicj4ifSwiaXNSZXF1aXJlZCI6dHJ1ZSwiY2hvaWNlcyI6W3sidmFsdWUiOiJTRVBBLcOcYmVyd2Vpc3VuZyIsInRleHQiOnsiZGUiOiJTRVBBLVRyYW5zYWN0aW9uIn19XX1dLCJ0aXRsZSI6eyJkZSI6IlBheW1lbnQifSwiZGVzY3JpcHRpb24iOnsiZGUiOiJTZWxlY3QgeW91ciBQYXltZW50IG1ldGhvZCE8YnI+In19XSwic2hvd1RpdGxlIjpmYWxzZSwid2lkdGhNb2RlIjoicmVzcG9uc2l2ZSIsIndpZHRoIjoiODAwcHgifQ==' ></web-form>`,
    de: `<web-form zone="campai" organisation="662303fb1145fd05bebef19c" form="66230a725f407b765150da60" css='.sd-root-modern{--base-unit: 4px;--primary: #000000;--primary-foreground: #ffffff;--foreground: #000000;--background: #f3f3f3;--background-dim: #ffffff;--background-dim-light: #f9f9f9;--font-family: initial;flex: 1;}.sv-tagbox__item, .sd-tagbox_clean-button{box-sizing: content-box;}' model='base64;eyJsb2NhbGUiOiJkZSIsInRpdGxlIjp7ImRlIjoiPGJyPiJ9LCJkZXNjcmlwdGlvbiI6eyJkZSI6Ijxicj4ifSwibG9nb1Bvc2l0aW9uIjoicmlnaHQiLCJjb21wbGV0ZWRIdG1sIjp7ImRlIjoiPGgxPlZpZWxlbiBkYW5rIGbDvHIgZGFzIEF1c2bDvGxsZW48L2gxPlxuPHA+RHUgc29sbHRlc3QgZWluZSBFLU1haWwgZXJoYWx0ZW4gaGFiZW4gZGllIER1IGJlc3TDpHRpZ2VuIG11c3N0LiBCaXR0ZSDDvGJlcnByw7xmZSBhdWNoIGRlaW5lbiBTUEFNLU9yZG5lci48L3A+XG4ifSwicGFnZXMiOlt7Im5hbWUiOiJNaXRnbGllZHNhbnRyYWciLCJlbGVtZW50cyI6W3sidHlwZSI6InRleHQiLCJuYW1lIjoiVm9ybmFtZSIsIm1heFdpZHRoIjoiNTAwcHgiLCJpc1JlcXVpcmVkIjp0cnVlLCJmb3JtYXQiOiJ0ZXh0In0seyJ0eXBlIjoidGV4dCIsIm5hbWUiOiJOYWNobmFtZSIsIm1heFdpZHRoIjoiNTAwcHgiLCJzdGFydFdpdGhOZXdMaW5lIjpmYWxzZSwiaXNSZXF1aXJlZCI6dHJ1ZSwiZm9ybWF0IjoidGV4dCJ9LHsidHlwZSI6InRleHQiLCJuYW1lIjoiR2VidXJ0c2RhdHVtIiwid2lkdGgiOiIyMTBweCIsIm1pbldpZHRoIjoiMjEwcHgiLCJtYXhXaWR0aCI6IjIxMHB4IiwiaXNSZXF1aXJlZCI6dHJ1ZSwiaW5wdXRUeXBlIjoiZGF0ZSIsImZvcm1hdCI6ImRhdGUifSx7InR5cGUiOiJkcm9wZG93biIsIm5hbWUiOiJBcnQiLCJ3aWR0aCI6IjIyMHB4IiwibWluV2lkdGgiOiIyMjBweCIsIm1heFdpZHRoIjoiMjIwcHgiLCJzdGFydFdpdGhOZXdMaW5lIjpmYWxzZSwidGl0bGUiOnsiZGUiOiJHZXNjaGxlY2h0In0sImlzUmVxdWlyZWQiOnRydWUsImNob2ljZXMiOlsid2VpYmxpY2giLCJtw6RubmxpY2giLCJkaXZlcnMiXX1dLCJ0aXRsZSI6eyJkZSI6Ik1pdGdsaWVkc2FudHJhZyJ9LCJkZXNjcmlwdGlvbiI6eyJkZSI6IlRyYWdlIGhpZXIgZGVpbmUgTWl0Z2xpZWRlcmRhdGVuIGVpbiEifX0seyJuYW1lIjoiQWRyZXNzZSIsImVsZW1lbnRzIjpbeyJ0eXBlIjoidGV4dCIsIm5hbWUiOiJTdHJhw59lICsgTnIuIiwibWF4V2lkdGgiOiI1MDBweCIsImlzUmVxdWlyZWQiOnRydWUsIm1pbiI6MCwibWF4Ijo5OTk5OSwiZm9ybWF0IjoidGV4dCJ9LHsidHlwZSI6InRleHQiLCJuYW1lIjoiUG9zdGxlaXR6YWhsIiwid2lkdGgiOiIxOTBweCIsIm1pbldpZHRoIjoiMTkwcHgiLCJtYXhXaWR0aCI6IjE5MHB4IiwiaXNSZXF1aXJlZCI6dHJ1ZSwibWluIjo5OTksIm1heCI6OTk5OTksInN0ZXAiOjEsImZvcm1hdCI6InRleHQifSx7InR5cGUiOiJ0ZXh0IiwibmFtZSI6Ik9ydCIsIndpZHRoIjoiMzAwcHgiLCJtYXhXaWR0aCI6IjMwMHB4Iiwic3RhcnRXaXRoTmV3TGluZSI6ZmFsc2UsImlzUmVxdWlyZWQiOnRydWUsImZvcm1hdCI6InRleHQifSx7InR5cGUiOiJ0ZXh0IiwibmFtZSI6IkxhbmQiLCJ3aWR0aCI6IjMwMHB4IiwibWF4V2lkdGgiOiIzMDBweCIsImlzUmVxdWlyZWQiOnRydWUsInBsYWNlaG9sZGVyIjp7ImRlIjoiRGV1dHNjaGxhbmQifSwiZm9ybWF0IjoidGV4dCJ9XSwidGl0bGUiOnsiZGUiOiJBZHJlc3NlIn0sImRlc2NyaXB0aW9uIjp7ImRlIjoiVHJhZ2UgaGllciBiaXR0ZSBkZWluZSBBZHJlc3NlIGVpbiEifX0seyJuYW1lIjoiS29tbXVuaWthdGlvbiIsImVsZW1lbnRzIjpbeyJ0eXBlIjoidGV4dCIsIm5hbWUiOiJFLU1haWwgQWRyZXNzZSIsIndpZHRoIjoiMzAwcHgiLCJtYXhXaWR0aCI6IjMwMHB4IiwiaXNSZXF1aXJlZCI6dHJ1ZSwidmFsaWRhdG9ycyI6W3sidHlwZSI6ImVtYWlsIn1dLCJpbnB1dFR5cGUiOiJlbWFpbCIsImZvcm1hdCI6ImVtYWlsIn1dLCJ0aXRsZSI6eyJkZSI6IktvbW11bmlrYXRpb24ifSwiZGVzY3JpcHRpb24iOnsiZGUiOiJXaWUga8O2bm5lbiB3aXIgZGljaCBlcnJlaWNoZW4gdW5kIHdpZSBzb2xsZW4gd2lyIG1pdCBkaXIga29tbXVuaXppZXJlbj8ifX0seyJuYW1lIjoiU2VpdGUyIiwiZWxlbWVudHMiOlt7InR5cGUiOiJjaGVja2JveCIsIm5hbWUiOiJBYnRlaWx1bmciLCJ3aWR0aCI6IjMwMHB4IiwibWF4V2lkdGgiOiIzMDBweCIsInRpdGxlIjp7ImRlIjoiPHNwYW4gY2xhc3M9XCJzdi1zdHJpbmctdmlld2VyXCI+PGg1IGNsYXNzPVwic2QtdGl0bGUgc2QtZWxlbWVudF9fdGl0bGUgc2QtcXVlc3Rpb25fX3RpdGxlIHNkLXF1ZXN0aW9uX190aXRsZS0tcmVxdWlyZWRcIiBpZD1cInNxXzExNF9hcmlhVGl0bGVcIiBhcmlhLWxhYmVsPVwiV2llIHZpZWwgQ2FubmFiaXMgYmVuw7Z0aWdzdCBkdSBpbSBNb25hdD9cIj48c3BhbiBjbGFzcz1cInN2LXN0cmluZy12aWV3ZXJcIj5XaWUgdmllbCBDYW5uYWJpcyBiZW7DtnRpZ3N0IGR1IGltIE1vbmF0Pzwvc3Bhbj48L2g1Pjwvc3Bhbj4ifSwiY2hvaWNlcyI6W3sidmFsdWUiOiJBYnRlaWx1bmcgMSIsInRleHQiOnsiZGUiOiIxLTEwZyJ9fSx7InZhbHVlIjoiQWJ0ZWlsdW5nIDIiLCJ0ZXh0Ijp7ImRlIjoiMTAtMjBnIn19LHsidmFsdWUiOiJBYnRlaWx1bmcgMyIsInRleHQiOnsiZGUiOiIyMC0zMGcifX0seyJ2YWx1ZSI6IkFidGVpbHVuZyA0IiwidGV4dCI6eyJkZSI6IjMwLTQwZyJ9fSx7InZhbHVlIjoiQWJ0ZWlsdW5nIDUiLCJ0ZXh0Ijp7ImRlIjoiNDAtNTBnIn19XX1dLCJ0aXRsZSI6eyJkZSI6Ik1pdGdsaWVkc2NoYWZ0In0sImRlc2NyaXB0aW9uIjp7ImRlIjoiVHJhZ2UgaGllciBiaXR0ZSBkZWluZW4gTWl0Z2xpZWRzY2hhZnRzYmVnaW5uIHVuZCBadWdlaMO2cmlna2VpdCBlaW4hIn19LHsibmFtZSI6IlNlaXRlMSIsImVsZW1lbnRzIjpbeyJ0eXBlIjoiZHJvcGRvd24iLCJuYW1lIjoiU3RhbmRhcmQgZsO8ciBaYWhsdW5nIiwid2lkdGgiOiIxMDAlIiwiaXNSZXF1aXJlZCI6dHJ1ZSwiY2hvaWNlcyI6WyJTRVBBLcOcYmVyd2Vpc3VuZyJdfV0sInRpdGxlIjp7ImRlIjoiWmFobHVuZ3NtZXRob2RlIn0sImRlc2NyaXB0aW9uIjp7ImRlIjoiVHJhZ2UgaGllciBiaXR0ZSBkZWluZSBnZXfDvG5zY2h0ZSBaYWhsdW5nc21ldGhvZGUgZWluISJ9fV0sInNob3dUaXRsZSI6ZmFsc2UsIndpZHRoTW9kZSI6InJlc3BvbnNpdmUiLCJ3aWR0aCI6IjgwMHB4In0=' ></web-form>`
};

const contactForms = {
    en: `<web-form zone="campai" organisation="662303fb1145fd05bebef19c" form="6623e49f4baf6c9aa0df2eb5" css='.sd-root-modern{--base-unit: 4px;--primary: #a1dab4;--primary-foreground: #343a40;--foreground: #ffffff;--background: #343a40;--background-dim: #343a40;--background-dim-light: #f9f9f9;--font-family: initial;flex: 1;}.sv-tagbox__item, .sd-tagbox_clean-button{box-sizing: content-box;}' model='base64;eyJsb2NhbGUiOiJkZSIsInRpdGxlIjp7ImRlIjoiICJ9LCJkZXNjcmlwdGlvbiI6eyJkZSI6IiAifSwibG9nb1Bvc2l0aW9uIjoicmlnaHQiLCJjb21wbGV0ZWRIdG1sIjp7ImRlIjoiPGgxPlZpZWxlbiBkYW5rIGbDvHIgZGFzIEF1c2bDvGxsZW48L2gxPlxuPHA+V2lyIHdlcmRlbiB1bnMgdW1nZWhlbmQgbWl0IERpciBpbiBWZXJiaW5kdW5nIHNldHplbi48L3A+XG4ifSwicGFnZXMiOlt7Im5hbWUiOiJTZWl0ZTEiLCJlbGVtZW50cyI6W3sidHlwZSI6InRleHQiLCJuYW1lIjoiRnJhZ2UxIiwidGl0bGUiOnsiZGUiOiJOYW1lIn0sImhpZGVOdW1iZXIiOnRydWUsImlzUmVxdWlyZWQiOnRydWUsImZvcm1hdCI6InRleHQifSx7InR5cGUiOiJ0ZXh0IiwibmFtZSI6IkZyYWdlNyIsInRpdGxlIjp7ImRlIjoiRS1NYWlsIn0sImhpZGVOdW1iZXIiOnRydWUsImlzUmVxdWlyZWQiOnRydWUsInZhbGlkYXRvcnMiOlt7InR5cGUiOiJlbWFpbCJ9XSwiaW5wdXRUeXBlIjoiZW1haWwiLCJwbGFjZWhvbGRlciI6eyJkZSI6Im1heEBtdXN0ZXJtYW5uLmRlIn0sImZvcm1hdCI6ImVtYWlsIn0seyJ0eXBlIjoiY29tbWVudCIsIm5hbWUiOiJGcmFnZTExIiwidGl0bGUiOnsiZGUiOiJNZXNzYWdlIn0sImhpZGVOdW1iZXIiOnRydWUsImlzUmVxdWlyZWQiOnRydWV9XX1dLCJzaG93VGl0bGUiOmZhbHNlLCJzaG93UGFnZVRpdGxlcyI6ZmFsc2UsIndpZHRoTW9kZSI6InJlc3BvbnNpdmUiLCJ3aWR0aCI6IjgwMHB4IiwiZml0VG9Db250YWluZXIiOnRydWV9' ></web-form>`,
    de: `<web-form zone="campai" organisation="662303fb1145fd05bebef19c" form="662307bd22e009f81759f7e7" css='.sd-root-modern{--base-unit: 4px;--primary: #a1dab4;--primary-foreground: #343a40;--foreground: #b6b6b6;--background: #343a40;--background-dim: #343a40;--background-dim-light: #f9f9f9;--font-family: initial;flex: 1;}.sv-tagbox__item, .sd-tagbox_clean-button{box-sizing: content-box;}' model='base64;eyJsb2NhbGUiOiJkZSIsInRpdGxlIjp7ImRlIjoiICJ9LCJkZXNjcmlwdGlvbiI6eyJkZSI6IiAifSwibG9nb1Bvc2l0aW9uIjoicmlnaHQiLCJjb21wbGV0ZWRIdG1sIjp7ImRlIjoiPGgxPlZpZWxlbiBkYW5rIGbDvHIgZGFzIEF1c2bDvGxsZW48L2gxPlxuPHA+RHUgc29sbHRlc3QgZWluZSBFLU1haWwgZXJoYWx0ZW4gaGFiZW4gZGllIER1IGJlc3TDpHRpZ2VuIG11c3N0LiBCaXR0ZSDDvGJlcnByw7xmZSBhdWNoIGRlaW5lbiBTUEFNLU9yZG5lci48L3A+XG4ifSwicGFnZXMiOlt7Im5hbWUiOiJTZWl0ZTEiLCJlbGVtZW50cyI6W3sidHlwZSI6InRleHQiLCJuYW1lIjoiRnJhZ2UxIiwidGl0bGUiOnsiZGUiOiJOYW1lIn0sImhpZGVOdW1iZXIiOnRydWUsImlzUmVxdWlyZWQiOnRydWUsImZvcm1hdCI6InRleHQifSx7InR5cGUiOiJ0ZXh0IiwibmFtZSI6IkZyYWdlMiIsInRpdGxlIjp7ImRlIjoiRS1NYWlsLUFkcmVzc2UifSwiaGlkZU51bWJlciI6dHJ1ZSwiaXNSZXF1aXJlZCI6dHJ1ZSwidmFsaWRhdG9ycyI6W3sidHlwZSI6ImVtYWlsIn1dLCJpbnB1dFR5cGUiOiJlbWFpbCIsInBsYWNlaG9sZGVyIjp7ImRlIjoibWF4QG11c3Rlcm1hbm4uZGUifSwiZm9ybWF0IjoiZW1haWwifSx7InR5cGUiOiJjb21tZW50IiwibmFtZSI6IkZyYWdlMyIsInRpdGxlIjp7ImRlIjoiTmFjaHJpY2h0In0sImhpZGVOdW1iZXIiOnRydWUsImlzUmVxdWlyZWQiOnRydWV9XX1dLCJzaG93VGl0bGUiOmZhbHNlLCJzaG93UGFnZVRpdGxlcyI6ZmFsc2UsImNvbXBsZXRlVGV4dCI6eyJkZSI6IlNlbmRlbiJ9LCJ3aWR0aE1vZGUiOiJyZXNwb25zaXZlIiwid2lkdGgiOiI4MDBweCIsImZpdFRvQ29udGFpbmVyIjp0cnVlfQ==' ></web-form>`
};

function renderFlyers() {
    const galleryDiv = document.querySelector('.gallery');
    if (!galleryDiv) {
        console.error('Gallery div not found!');
        return;
    }

    flyers.forEach((flyer, index) => {
        const img = document.createElement('img');
        img.className = 'thumbnail';
        img.src = flyer.src;
        img.alt = flyer.alt;
        img.setAttribute('data-bs-toggle', 'modal');
        img.setAttribute('data-bs-target', `#flyerModal${index}`);
        galleryDiv.appendChild(img);

        const modal = document.createElement('div');
        modal.className = 'modal fade flyer-modal';
        modal.id = `flyerModal${index}`;
        modal.setAttribute('tabindex', '-1');
        modal.setAttribute('aria-hidden', 'true');
        modal.innerHTML = `
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${flyer.alt}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img src="${flyer.src}" alt="${flyer.alt}" class="img-fluid">
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    });
}

function replaceWebForm(lang) {
    const formContainer = document.querySelector('.registration-form');
    // Remove the existing web-form
    const existingForm = formContainer.querySelector('web-form');
    if (existingForm) {
        formContainer.removeChild(existingForm);
    }

    // Insert the new web-form HTML from the webForms object
    formContainer.innerHTML += webForms[lang];
}

function replaceContactForm(lang) {
    const formContainer = document.querySelector('.contact-form');
    // Remove the existing web-form
    const existingForm = formContainer.querySelector('web-form');
    if (existingForm) {
        formContainer.removeChild(existingForm);
    }

    // Insert the new web-form HTML from the webForms object
    formContainer.innerHTML += contactForms[lang];
}

function switchLanguage() {
    currentLanguage = (currentLanguage === 'en') ? 'de' : 'en';
    updateLanguage();
    replaceWebForm(currentLanguage);
    replaceContactForm(currentLanguage);
}

function updateLanguage() {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = translations[currentLanguage][key];
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    if (!navbar) {
        console.error('Navbar element not found!');
        return;  // Stop the function if navbar is not found
    }

    // Create a sentinel div and insert it before the navbar
    const sentinel = document.createElement('div');
    sentinel.id = 'sentinel';
    navbar.parentNode.insertBefore(sentinel, navbar);

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        });
    }, {
        root: null,
        threshold: 0,
        rootMargin: '-100px 0px 0px 0px'  // Adjust based on your navbar's height
    });

    observer.observe(sentinel);
});

document.getElementById('acceptAllCookies').addEventListener('click', function() {
    document.getElementById('cookieConsentPopup').style.display = 'none';
    // Logic to handle acceptance
});

document.getElementById('rejectCookies').addEventListener('click', function() {
    document.getElementById('cookieConsentPopup').style.display = 'none';
    // Logic to handle rejection of non-essential cookies
});

document.getElementById('customizeCookies').addEventListener('click', function() {
    // Open settings for detailed preferences
});

window.onload = function() {
    var modal = document.getElementById('ageVerificationModal');
    var confirmBtn = document.getElementById('confirmAge');
    var denyBtn = document.getElementById('denyAccess');
    var languageToggle = document.getElementById('languageToggle');
    var currentLanguage = 'de';  // Default language

    // Pause all media
    document.querySelectorAll('video').forEach(video => video.pause());

    // Show modal on page load
    modal.style.display = "block";

    // Initialize button text based on current language
    languageToggle.textContent = (currentLanguage === 'de') ? 'EN' : 'DE';

    // Toggle language when the language button is clicked
    languageToggle.onclick = function() {
        currentLanguage = (currentLanguage === 'en') ? 'de' : 'en';
        updateModalText(currentLanguage);
        languageToggle.textContent = (currentLanguage === 'de') ? 'EN' : 'DE'; // Update button text to opposite language
    };

    function updateModalText(lang) {
        var texts = {
            en: {
                title: "Age Verification",
                text: "You must be 18 years old to enter this site.",
                confirm: "I am 18 or older",
                deny: "I am under 18"
            },
            de: {
                title: "Altersverifikation",
                text: "Sie müssen mindestens 18 Jahre alt sein, um diese Seite zu betreten.",
                confirm: "Ich bin 18 Jahre alt oder älter",
                deny: "Ich bin unter 18"
            }
        };
        document.getElementById('modalTitle').textContent = texts[lang].title;
        document.getElementById('modalText').textContent = texts[lang].text;
        confirmBtn.textContent = texts[lang].confirm;
        denyBtn.textContent = texts[lang].deny;
    }

    // Initially set the modal text to German as per currentLanguage
    updateModalText('de');

    // When user confirms age
    confirmBtn.onclick = function() {
        modal.style.display = "none";
        // Resume playing videos or start them
        document.querySelectorAll('video').forEach(video => video.play());
    };

    // When user denies age
    denyBtn.onclick = function() {
        modal.style.display = "none";
        document.body.innerHTML = '<h1>Access Denied</h1><p>You are not allowed to access this site. Come back later, kid.</p>';
    };
};

function initMap() {
    var location = {lat: 52.517, lng: 13.402}; 
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

document.getElementById('languageToggle').addEventListener('click', switchLanguage);

// Update text content when the page loads
document.addEventListener('DOMContentLoaded', function() {
    updateLanguage();
    renderFlyers();
    initMap();
});