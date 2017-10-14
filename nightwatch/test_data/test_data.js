module.exports = {
    transactions: {
        minimumEntry: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'MK',
                oai: 'CHI1234SI',
                nam: 'poo',
                sex: 'U',
                rac: 'o',
                hgt: '000',
                wgt: '000',
                hai: 'red',
                off: 'poopy',
                dow: '01011900',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: '123456789.MK.CHI1234SI.poo.U.o.000.000.red.poopy.01011900......'
            }
        },

        minimumEntryOlFields: {
            fields: {
                hdr: '123456789',
                mke: 'MK',
                oai: 'CHI1234SI',
                nam: 'poo',
                sex: 'U',
                rac: 'o',
                hgt: '000',
                wgt: '000',
                hai: 'red',
                off: 'poopy',
                dow: '01011900',
                oln: '',
                ols: '',
                oly: '',
                lic: 'a2345',
                lis: 'KY',
                liy: '1900'
            },
            results: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: '123456789.MK.CHI1234SI.poo.U.o.000.000.red.poopy.01011900....a2345.KY.1900'
            }
        },


        // maximumEntryDlOptionalFields: {
        //     fields: {
        //         hdr: 'You Broke Law, youA',
        //         mke: 'oops',
        //         oai: 'A234S6789',
        //         nam: 'qwertyuiopasdfghjklzxcvb’nmqw',
        //         sex: 'F',
        //         rac: 'B',
        //         hgt: '999',
        //         wgt: '999',
        //         hai: 'wdksleicvq',
        //         off: '1234567890ASCUL',
        //         dow: '11121992',
        //         oln: '1234567890!@#$%ASDFG',
        //         ols: 'WA',
        //         oly: '1987',
        //         lic: '',
        //         lis: '',
        //         liy: ''



        //     },
        //     results: {
        //         header: 'Valid',
        //         errorList: {},
        //         queryTitle: 'Assembled Query:',
        //         assembledQuery: 'You Broke Law, youA.oops.A234S6789.qwertyuiopasdfghjklzxcvb’nmqw.F.B.999.999.wdksleicvq.1234567890ASCUL.11121992.1234567890!@#$%ASDFG.WA.1987...'
        //     }

        // },
        maximumEntryDlOptionalFields: {
            fields: {
                hdr: 'You Broke Law, youA',
                mke: 'oops',
                oai: 'A234S6789',
                nam: 'qwertyuiopasdfghjklzxcvb’nmqw',
                sex: 'F',
                rac: 'B',
                hgt: '999',
                wgt: '999',
                hai: 'wdksleicvq',
                off: '1234567890ASCUL',
                dow: '11121992',
                oln: '',
                ols: '',
                oly: '',
                lic: '5A856427',
                lis: 'UT',
                liy: '1995'

            },
            results: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: 'You Broke Law, youA.oops.A234S6789.qwertyuiopasdfghjklzxcvb’nmqw.F.B.999.999.wdksleicvq.1234567890ASCUL.11121992....5A856427.UT.1995'
            }
        },

        licOnly: {
            fields: {
                hdr: 'You Broke Law, youA',
                mke: 'oops',
                oai: 'A234S6789',
                nam: 'qwertyuiopasdfghjklzxcvb’nmqw',
                sex: 'F',
                rac: 'B',
                hgt: '999',
                wgt: '999',
                hai: 'wdksleicvq',
                off: '1234567890ASCUL',
                dow: '11121992',
                oln: '',
                ols: '',
                oly: '',
                lic: '5A856427',
                lis: '',
                liy: ''

            },
            results: {
                header: 'Errors Received:',
                errorList: "If License Plate, License State, or License Year are present, all three must be present.",
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }

        },
        lisLiyOnly: {
            fields: {
                hdr: 'You Broke Law, youA',
                mke: 'oops',
                oai: 'A234S6789',
                nam: 'qwertyuiopasdfghjklzxcvb’nmqw',
                sex: 'F',
                rac: 'B',
                hgt: '999',
                wgt: '999',
                hai: 'wdksleicvq',
                off: '1234567890ASCUL',
                dow: '11121992',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: 'WY',
                liy: '1985'

            },
            results: {
                header: 'Errors Received:',
                errorList: "If License Plate, License State, or License Year are present, all three must be present.",
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }

        },

        olnOnly: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'MKE',
                oai: 'CHI1234SI',
                nam: 'Harry Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '12345',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    oln: `If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.`
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }
        },

        mediumEntry: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: 'You Broke Law',
                mke: 'Po!',
                oai: 'A234S6789',
                nam: 'Captain Awesome',
                sex: 'F',
                rac: 'P',
                hgt: '500',
                wgt: '500',
                hai: 'blonde',
                off: 'shapoopy',
                dow: '05051960',
                oln: '',
                ols: '',
                oly: '',
                lic: '1a2s3d6',
                lis: 'WY',
                liy: '1960'
            },
            results: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: 'You Broke Law.Po!.A234S6789.Captain Awesome.F.P.500.500.blonde.shapoopy.05051960....1a2s3d6.WY.1960'
            }
        }

    },


}



