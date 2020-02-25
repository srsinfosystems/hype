/*...
 	const.js
*/
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var sk_const = {
    logo : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA5UAAACnCAYAAACB8njoAAAACXBIWXMAAC4jAAAuIwF4pT92AAAgAElEQVR42u3dfXBc5WHv8d/qzW/glXmLcQ0SJgQuwW9JeAkkkTxpCbSlkrNF3dtp481NMjfT2zuIy72dO8kMrP9oJ5O2gzxJKZ00ZU0y7bLpXuRLU0guvV6FJIVAYslOiCHBlsAYA8bW4mvZlmXv/WMfCVmWdvc5e3b3vHw/MxqwvXu055znnH1+53mLFAoFAQAAAADgRBOHAAAAAABAqAQAAAAAECoBAAAAAIRKAAAAAAChEgAAAAAAQiUAAAAAgFAJAAAAACBUAgAAAAAIlQAAAAAAQiUAAAAAAIRKAAAAAAChEgAAAABAqAQAAAAAECoBAAAAACBUAgAAAAAIlQAAAAAAQiUAAAAAgFAJAAAAACBUAgAAAABAqAQAAAAA1FFLWHc8ncl2S+o0P+2SNph/ape0foG35SUNz/pzbtZ/R+N9sVGKFAAAAIAwiRQKhTAEyA2Sus3PBkkdNfx1QyZ45iQNEzQBAAAAECr9FyI7TYDsNf+NNvDjjJiAORjvi+UocgAAAAAIld4Mku0mRPZr4e6rjZaXNCgpRcAEAAAAQKj0RpjslpSQtMVnH31M0oAJmOMURQAAAACEyvqGyYSkpGo7PrJetktKMv4SAAAAAKGSMEm4BAAAAECoDFOYbD52WC3Hj0iSml57peRrC8tXqBC9SJJ0auUHCJcAAAAACJUeD5MbVBx72OXG9hYdellNr72i5jffUNORvJpfeqeq7Z2Ntursmkt1duXlOnPp5Tq96v06c+ElbnzUvNnvAcZcAgAAACBU2ofJdhVbJu+pZjutRw+o5dd71DK2Xy27Dtbls59ZvUxnrunQmSvW6NRV61RoW1rN5sYkJZgtFgAAAAChsvJA2S0pJYddXVuPHlDbL55X8569aj5wvOH7c/qjazR1zfXVBsxtKnaJpdUSAAAAAKGyRKAckMPWycUvPau25/696i6ttXI22qqpD12jyQ9/QqdXrHayiTFJvfG+2DBFFwAAAACh8tww2SlpUNJ6qx2YnNDikSG17fyJmvKnfXPgpzau0uTHftPpZD/3xvtiAxRfAAAAAIRKzXR3HZQUDXqYdDFc7lBxrCXdYQEAAACEN1SapUIesXnPkt05tT015OswOV+4nPhUn+3MsSOSugmWAAAAAEIZKtOZbErSlkpfv+jQy1r0/e96dsykG0723qaT67tsJvTJm2DJOEsAAAAA4QmVNoEyMjmhpT/5ntqe/GkoTsqZ1ct0anPMpksswRIAAABAQzR5PVC2Hj2gC9N/F5pAKUnNB45r6dce1bIfPl7pW6KSculMdgNFGgAa8r3WHtD96uTsAgA8FyptAuWS3Tld8FcPB7q7ayltT/5Uyx99UM3HDhMsAcC7watbUiKggTLBGQbg8XtVO0chZKHSJlAue/oftfixp0N/gppfekcX/O3faNGhlwmWAOBNGyT1B3C/kmbfAMCrgbJXEsvshSlUVhooI5MTWv7og2rb+SJnZ/ok5U9r6dce1eKXniVYAoA3Q2WHmc08KBW1TvOdzXcJAC/rl7SF1sqQhErzRVs2UE6Pnwxrd9dyljz6L1ry/JOVBstBLjAAqFuolILVVXS65bWD0wvAi8zQg6459yw0SEsdTnivKliHsvXoAS39xjcDtfZkLSwe/JGa8kd1/Df/sNxLOyTlxFNmAKi19ea/XelMtjveF8v5vKLWPjsgB2GfAB9ehxskdZp6XHuF9blhSeOm/jca74uNBvwwJWf9f/+cP6POarqkiLkgciq2nBEoXTS56fpKgqUkbY/3xRK+L6iRSKe5uVZqtFAojDb4M1f6JVDxZ45EItNfLraGC4XCuEfOpaN9KBQKOZePty/KkQvnvhE8c9zqUPHrlrQzSPfcdCablPTArL/6bLwvlmpQpdovZX443hcbd7iftt9vVoL0QMBBmXB8Xhq0b72SuvVe61u1xkw9PCdp0C/HwuK62T/nrxtyr6piH2zrLeNeXj6wpcYHKuV2oIzeuka3bP+u1Wd5dsvvKP/jfXU7qFMbV+nY7/+J1Xsu/OeH1LLrYMWvL445/cdKguWWdCab89NFtoDEnEpOOVvV+CdWG+ZUNt34zJ2SHnfwWbxwPKaD0S4Hb91hvhTdPN6Vfubp/x3RrCfAknJ1Dk4DLlY0as0T5a2O1/nce27S5y0EiTL7SJk/36YK7lFufb/Z1sem/zevYkvWqPkZNqHLT2XVtkxUc17qFST7TZiM1uBXdKg4/GyLpEfSmewOEy79XifUAt8xSZM9/PT9YVNvGTIPHcIVKs2JXV+ysjY5oSVPfIcWSofadr6os5fldGJd2fI1kM5kh738dAOVKRQKg5FIZMhBReuBSCSS8kDrkdMZ2rwwVmKmi+OswDkmaVDSQFha5lA2VE6XV1+O7zFzIHR4JFTCXVFz/+qac84D25rl8essqfqPWe6R1JPOZAdM+Brw4wOwWROJnRei05lsb7wvNkgpq7+mGp3sXkn3lAuUTMpTvcWPPV3JrLBR+evJDWoTsBo65XYkEumVs1aHrR4ObB3mXrc/EomkTDdthMt85zzh44nSkhUGZwTHdGvWI5KOpjPZwSDNZOy1MJnOZEfNsW7kJFjR6e+udCabMiHN7/epautI8FqonNXttaSlPxgkULpkyaP/otajB8q9bL0ZJwOfKxQKw5K2O3hrTyQS6W7gR3cSavPyz/pTW0y4HDDjOxEOXQtU2HxXKTfjQ+er6EaZTTxUelTsKjmezmSTnHt3ri2PhMkFv7v8cq7NZ+wtdU9mWb2AhEpTASzZL3zJ7hzrULps6Te+qcjkRLmXPcCFFhj9JnDVI9hVLRKJJB1+kfZ7ZYIhC/dIypnxowh2RXFDmWvUb5Il/o3yHD5RFcd6jhIunQegdCY7qOK4Oa8vz/OAT67zfpUff0prpd9DpXnKWXI9ytajB7T4sac58m6fyPxpXfC/U54NFXCXCVpOzuX6SCSSqHOgbHd4gx8pFAopn56i9QTLUCh1fjvMUBC/VH67Vbp7ejenO/ThcthPZdoj19Soii2/cCmkV1if2OLDLr2EyjlKVgAjkxNakv4WR71GWnYd1JLduXIv62KsRGCCZVLF6cJt1bt7ZtneCwvw+5PGKMEy1KHSb2W43PcCFTR0SHrcjLmk1bJ0+Emq2DoZ5Wi4fp+q9JjSWunXUJnOZPtVpml/6U++p+YDxznqNbT4sacrGV85wBdCYDi5aUbrdbM1gWqLg7duL7cuJcESPgiVvhjbU2ImRUIl5tOjYpdY7mvnX0vt6Uw2pRouEUOdp/IASl3Xh6HSnLRkqdcsOvSy2p78KUe8DpY88R3PhArUVqFQGFRx3SJbD9RpplKnk/MkA3SaopIGmbwnkCqZzdgP99qkS/uK8IhK2kXPp/Pqwjk5e5CK8sc3Ibtxqb6cMC30oVJlBs1GJie06PEsR7tOml96p5JusP08wQkMTy4xUsUSIkFc87FDLOsTtApOpa00nh7bU8FMirNf28mZxxyPmDUPCZTFQLm+Rr9iSNIOSVsX+BmSNBLww5ysY/0IDrS4dCGVPGmLR4bo9lpnbU8N6eR1N6nQtnShl0y3ViY5Wv5WKBSGI5HINpVZG3YePZFIpLsW3UxNq5yTisaY6jeZVF7ScIl/d7tlpicSifSa1mX4n03Xv4SH77WVzKQ4e59HOfWY4550Jtse74slCJSu2WG2mYv3xYYtP0+3ihNr9dYw5Nb7GHfL2ey5HelMNhHvi6W4TH0QKst9ITUfO6y2nT/hSNdZU/60lv5gUMd/8w9Lnrt0JjsQ74uNc8R8Lym7AezTBlSbKcTLjrFeaD/quITIcKFQ6K4gIHebY9St6mfxG5BUr1C5KSDjUoMQKj15r7WYSXH2Pnv5ocimeF8sDGV+a7wvlqzg/HaqOBa23Zy76Z9aLG2xJZ3JKqTB0q1AOf1QNVXNvcJcAzlJSVMG+h3WD7xWx3EqIXoK+SZUlryBLH7u+2rKn+ZIN0Dbzhd18ubDOnPhJQu9ZLq/OcuM+FyhUBg3a0E+aPnW9ZFIJOHm0h1mrKaTLidDXlxCxASznN6bNbfXfME5emrq9vGGL0Jl1JQbr533XsuKJhOz+Ei8Lzaq91qWB+c8TOjVe61ZboWNLelMdjzeFwtNl0MzKU+1gXJMUrIWrWmmDPSb2Wir+e5q5DHuVnU9h7rSmWx3SB44NVRTlSc6UapwFlspX+QoN9Di575f7iX0Nw9OsByQN5YYSSqgS4gUCoXxQqGQKhQKnSqOY3F6fOB/XQE477afqZPTHoiwOR7vi6XifbFEvC/WLumzcjbh23zuCcvkPWbVg2on5dka74t11rp75vQ5V/HB0FYVh3/4Rb9HtoFahkpV0EqJxmrb+aKajx0u9ZIOFjMOFCdf5q7NBmy6ijpdQmTYTwfarBO6ycGXcwdLjPi+MukkXHnqXutgJkUpIOOzcF7gSMX7Yt3mfuZGuHwk6MuNmNazB6vYxIikjZV0Y65BuEyacLnDJ/faHhc21cNEYx4OlebkLPikNjI54YtWyuita9TxxR6t2/ZlffgfvnreT8cXe3TR7Tf4+iRXEO4TXArBYLpqNnKJESdfkHn59CmiOd5Orh+uOX9zWmH2Ujl3VAZNZRrBDJe5WeFyrMrNDQZ1hnmzX6kqNrFdUrftBDwun+vReF+sV9JmebvVMunRbWEe1YypLDvjq2d3esUi/cYf3KErP/0ZLb3q+pKvveTjd0mSJsff1r5v/rVef+wpTR095a+T/LNfKfKJiVIzwfaYmduYsCcYEpL2O3jfgCpcWmA+kUgkIedLiPi27BUKhcFIJLJddi20VMzDGSq70plspxnn1MhKcbecj1Hq5PQHP1yalsYBOe/e2WEq8UHsdpiS83GJ2700mVG8LzZozvWgPNYTwTReubnmZy913dqqpvtrycpn6wve7MkWvXWNPvrYP+q6+75SNlDO1tZ+qa677yv6+Pf/j6K3rvHXSc6f1qL9u6s6n/BVyBmVtM3BW3tM91UngbJdzp4CjplupH5nuw90I/S37jqWlVqopqJPqAxHsBw34efeKjZzT9Bats3+OO2OudWLs+OaVssNKrageonbDySiYmyl90Kleaqx4FOaxa/u9uS6lJdtvlm3bP+uVZicL1zesv27umzzzb460W3P/TuhMlySctalxelMwE6XEAnEDd4EeavxKU4DPDyhmvFiWxrZLdCFMUqU23CFywEVJ/JxKmizy6ccvm97vcdPOjjXCa/MkGrukbUI4IRKr4XKcie6+eWfe25HL7r9Bm38asq17X3wS3+pZWtX+uZEN7/0jlqPHij1kp6gjn8II9Od1MkX2HrTjdUmHHXK+RIigwE67Lb7wvXmQyaUVbsEQyMrNtVWbJlkKnzBMlVFsFwflNlgzbIcTh6ebg/p+p3V3iNrsa5mNCyzE/spVHaX+seWn/3KW4HqgqVa/+cPubrNtvZLdd29/81XJ7vtF89XdV7hu2BZryVGkg5v/kG7sY9SOQ8FN85bQ0KlS2OUojyADG2wDO0ySqbMO7luR0TrWL2OdWjKY2BCpTnZC44HWvzqbjXlT3tqJz/437eqrf1S17d7ycfv8tX4yuY9e8u9hC6wweMkuFU87qCKJUS2mS6jQTJMcSNUWgSzhE/uB7U6BvBfsEzK2TIUHQFoHXLScpaX1MvEMNZ6LY913kF57OYweyBUlgseXuz6Ws0YynIuv+MO/4TKA8fLrVnJRRYwZskLJ5WASpcYSTrYdl4BfFLo5xlsYcWt+2RdrwGXn/4TKsMrIWfj9YMQKq2v8UbP9OxTtvfGAdlPMpTkMHsjVJb8Mmn+1VioDuClt3zSV5+3bX/J0N/B4rCB5LQiWXKChSqWEEkSwOBjbgWqej8tT8i9MUqEypAyrW5OAmKXX+sXppXV9toZMpMcwf5Y245bHZD9hFBd1He9ESoX/BJsPnbYk7O+1tLSq67Xos7l5x7UfW979vM2v7qPykLImG6mTsbCLLjESJVLiATyi5bZXENR4emUu5NH1HOslZu/i8pYuIPloKQhj5f3Rl87SUpKXY71drP8zbCDMsk58kCoXHA8ZevBX/tip9/4129r71//z5mfsX/6mibHnQfBxasuOfegemxM6Tmh8sXXCJXhNCB3lxhxuoRIIsDH2HbyElpr/cftMNVTj6flDp/+l9JFUQg9JxVy383bYK5P23WFh7yyNIfPjnW3g2M9uxymLN+7hdbKBoZKsz7lwoHltX2e3tn87h/qh5/epN33/LnGHt4x87P3/of0zO2/pfzuHzra7rKrr6r6s7XsOlifE54/zbjKEDLdTZ08bT1viREz1vIBB9vaYcZ4BpXttcPEPsE/x7WqnNtyvYWIyli4mdBk2zLkxyE2vR69pnlQUWylHJ1VJlOyn/E+wWFvUKhUmVaspnHvPnif2P+iXvj8n+r4nkPz/vvU0VN64fN/6qjFsnXZBb466a1HSwZYKgrBDZYpFac3tzV3iRGn3VeDPq26beVjlFLpO7XoydFbyyU6HD79b9SxgL+k6hTSGsk2dIzQSun4PtXlQvmzrZ/0s0RS40JlycBRr9Y2J176269q6uipkq+ZOnpKr33nG678vkWHXvbssYi8+Xqpf+7gsgg0J8FuZokRM26wx8E2tgZwCZH3rqlia67NtZMP8vEgVDq7vmok6aNjAR8xLUO2wyq6fRR0Si6h52LQhn14X6iLsW2ZjIrl9FzT4taXSJkulQ01sf9FvfX4cxW99sjwLl1d7wrp5ERdf1/zm2+Uu5FuMIOeETCFQiEXiUR2OAiGD0QikZSctVLm5bx10w+B0smkRbk6fLSBSCTSiO4jKdMqHiimglmrh26JWoQ/M2SlVuMfvRgqB9KZbEPKvAlYYTQou7WK/fQwotvh8YDdfapT9utdz1uniPfFxtOZrG2ZTPIwoDGhcsEm4pbjRzy7k28/+28Vv/bM/5uo++drO3KgvpXgkycdn2cfeSASiTzAJT6vfjlrbcw5rFT3B3wJkZSD41KPULm+QccjF9DzXMvKcEc6k03UIJjUsgW004PniDLfmH23qcB3BPiaH2FdSkeSlq8fMzMQl9qeVZms0f03dFzr/tr0lne7vp44+HrFrz3+y9eDf9LLL3lCt6YAq2KJESeVgZEgtlpJxRbKSCQy6DCg8zTbf7otX287iYmrAdDh03+bBcTXUyTgJFDXeX3Wel7zOYpDXe5TJUOoCfY7LLeZ4GzUP1QuXKk8dcKzO3ls3ysVv7bcuMuKD+xrr3j3pJdf8oRBy8E3IPtZ0pwI5OQ8ZmzpsMNAuYPxlL5k87At76CSst7lyrbttTdkWyn2UThAjZgKvO24Sr/UMToJlTVne5/MV9iiaDvkpov7Wf1DpS81okurVQV18mQDfucEpT/ETHfUZI1/zfYgLSFiWiYTkUhkWNJOOe/GNUAJDHyoHHb4tNyVhzBm/KdtZS0p+xmJOykWkP3ySH7pDWV7jx+lKFjfp2zveRV9f5pJfFhexK+hstzkLyhRWX2z/l1u6z2OE54MlinZd9GrVF4+XKsrEol0z/lJRiKRARMkj0p6RNV1+wv6Wp1BrvzYVDCHHT5A6HFpHb9+FWc1rNT0Mgi24YBQCSeh0g/XvHXZZoLDmt+nbCf9s62DbGH9XY+EygomfwnXgT3l6+PBmMrwqFXwG/BBF8+uSCRSmP2jYgvk7J8HJN0jd8aP5RX8tTqDyvaeOGoqmTnZrw3rRhlx9PQ/3hcbl11Xxm6KBiTZTsTmh4q77WfMUwxqfp9KmXtUpSE/5eC8JDktdQiV9DW2PLCHfN1yy5jKkDCtZttd3uyY6OI57xcoYyl9y/b7b3huYLOQqGYx7nQmm5Dd0/+xOWOUbFpbOikaqENg8wNaKWt7n3JyL3Xynt5q7r+ESjT+JOSPchDQSEm5+5Q1GfAlRJzYHtRZcKkEn2/2otwmsNmM7YmqurE9ySorXTaV4w4qYBBjCVH7+9R2h8u12H7vRkWPorqESiqJtToJ4xxaNI5pPXOrZXGI8DRvoExwGHzNpvvrmAsVG0eVmnQm2yu7sZ/5eT7beA2PDQiVCDnTSmk7CZKjOooJora9sfi+rnWoZACyncjEKT9/fFJu+Li1xAhP+AiUQWQzpnZ0gevLpjdAh6l41fr6G5hnjFKOUAlLtFajlqFtqMoMkrJ8vdP7b+i1uLWhwuLFHM1Zml96x88fnwcIIVMoFMYjkUhSxdlNqwlQlJ33bC0UCslGBlo1pgUhF6ST6GA+gfP2P94XG09nsoOyW+Q7YVMZMp+zy4XKlm2Z6fTQ6aLMNwYPFlDL+1RV36PxvlgunckOWf7efgdhlFDp1obOvO9ytWofR9SByNv1nzTs1MoPBP2wbvfADWGDpAd9FCxTkUgk4eCGLzGz6WxjkhIeWDokxfIlDakwD5eoGNmEyq50Jts9e3xmBSHU6h453xileF9sNJ3J+jVQpCyOFxpnNID7RGttbQLimEvXdMqybrPe8v4LN0MlnGs+cJyDUIMvrUZXqCORiF9v+DsdvG+AyXmKa2g1uHUSjQ+V81aYTVizfVqeUAWtYGZttS0OrvWF2HzOLopI6LW7cY343HqKQdn71AbVuZVy1v03lc5kk7Iby5kUyyZZsZ39dcH1tgrLV3A054aKyQlPfq6z0dYw3vBRAYdLjIyFPEiNSdoqqZNASagsM/bHtnxUuhi37XaHysykaPUdwILhXCMB3CfroRzMhFyWbW+mucsdVct2W13c22obKhdsiShEL+JoztF25IA3Q+WaSwmVcPPGmwrhMRqTtE3SpkKh0FkoFFhGJbhsWiCGygTOnOwnxOqvoCLrZiulk+8AKl7hZnv+PT/2fp4JrMIarl3hsDeF2+td206YVsm9ElWEygW/aKaWESqdaD52uP6hsr3swzQqx0DRiAkKO1Rsjdws6SoTJPsZsxj4ilC3W9+RVVRSEmVaQGyf/g9VME7IttLfTWkJdViwXR7CL3WMEUKla2zve/Mtd+TGg4JBy7dtoQW6AaHyzIWXcDQdaDl+pP6hMrqi3IXHDJ4Ig6FCoRAp87OhUCh0FwqFXtMaOWjW9UQ4uDKecs79NSW7p+VRSb0LVOjbHYTKlBv7QWUaTh8o+Gjyk9FaH4uQPHhw0ptiwGFrsdvhVmISwsozjeXrS4aNqY2r1LLrIEfViOSPSCu997nOXnF1qX8e48wBgKOwVGlleUDSA5YVofnCYK8JnZWqaIxSvC82bDkDbCdFhVBZaRn00b4NS+ohVFbNSSjrNBPr1ELe8r7Zn85kaxVyQx0qR0uGlZWXSyJUTmvd8zNF3j1a8jVN+aN1/1xluiqPcuYAwFFYqrSXh22o7Ehnsr3xvtjgPGHThs3rR1T5eFJmvgyvXsvX53y0bznL6zS6wHUaWg57U0j2LZu1NN1bJMUZLc2q+2u5bpFnLr2cIzo7se86qMWDPyr507bzxbp+pjOrl5XrqpzjzAGAJLvp7/OVPsk2r7OdZbl/TmUtIbuxbHnZjScataw80gU2fIEhIbsWH8kHk/RU+Vl7KRnn3beiAdiPJKfS5VBpLDi73elV7+eIetyZa8rWQRhPCYAKs31Isr132lZSuuZ8Jtun/7bdt2z3h1AZPgkH7/FNK565XoZsQyUTu1RdRryoI53J8sCgBqFywS+aMxdeojOrl3FUvRwqr1hT7iU5jhIAqKah0qwTaVth7TeBt1v2XU5tp+cftXx9J0UmPEwZtF3IfqzM+qheZBuCo2Jil+kykpD9zMBexnmtQagsGTrOrL2Oo+phZVqTRxiIDAC1D5VG0vL1W8wSDrbv2+7g3m5b+e+myIRK0sF7Uj7cTyctq/20VjouI17WRTf/eofKK6/mqHrUmWsvZjwlANQmVNqGsOmlFWxnw0zKvoUo6fCz2eikyISDaYHqcvBW34VKhz0KQt9aabqKdgRw12itdDNUmqedCy4Ie/LKdTobbQ31QT0bbdXUxlVWP/U4Zqc3bKzqgQEAhIhVpbmKtfdsA5/trIg7quhyaBN4O2idCUVYaJd9V2pJGvJh19dqwvADpldBWAU1fG0J+XktqaWKC+zBhf5x6kPX1H1WU0+FyjWX6tjv/4nVey7854fUVOM1PievuqFcpYhpsAFQcbbv4jRSxa8bNJX0Ws2QOFDFe0dl19qwQTycDLpBh2V1wK87HO+LpcyaiR0OjlXouks6HG/rt8BMi+U8mhy+r+SXxtQNH+HIeszUxlXlur7u4CgBwEw4sg1fTius4zWscA9V0YJa9rveheMGf4WFlMOwMBaAh9ZOrtH16Ux2IIRFJRnw/UvQK8PFUGnWq1ywW8yplR/w/CywizqX68KbO0Jzok+v/VC5l9BKCQDOwlG1SzGlarQf1W7XdnKfTopOYANlv5wvSB+EVp2U7Mc/S9I9ZgxqWMpJp4LdSikVW+oT3BXO11LFewdUogvs6ds+qubHnvbkTi9bu1JXf/5zamu/WHveTOrU6LuBPslno606ee0tpV5iuyg2ABAqXQqV8b7YaDqT3V5FpX0+Y/G+WLWhkrUqMT0xz4MO3z4UhKE18b7YuOkC+4iT+nI6kx02DTJePs/t0/taxWaSTsqIR+75Nt26++XjLt1eDJWDpW4yJ6+7SW3RITXlT3tup6/+/Od0+W//kSTp2nvf0e57/jzQJ3ly001lzyVLiQDADNsn7W5UFgdcDpVJF7YxXOPjBu8HylSV5TIwY8/M2MqEg3IelZRLZ7LdXg2WJlDmzPnKOdxGp4OyMhTvi3V7YP+Tkh6weEtHOpNNuPDgLlCaqri4RlViHF6hbWklYaZuFnUu16o//qQ+/A9f1cTrr878/cTrr2rdti9r1R9/Uos6lwfyJJ9cX/b+x0UBAHI0SY/cmNXSVDbdemLvSu8T87Ax76BiCf9fB+3pTDZXZaDc6vXWuTqG5NnBFlsAAA/YSURBVJlg6cFz3a3iuPD1VW4qWaf31EKqjmWBUOnkJJxc3+WZ5UVOjb6rtfd/XZd8/C5d/YUvzfz91V/4ki7/7T/S2vu/HshusJObrlehbWmpl4xVOZEDAASJbShys+uWW92pBlzsfTJc4+MH74WMXhMyqml5Hon3xZJBOzYmJG+tIlju9NIYS9NCt1NVzj5tWjp7Ld/mmfqneTC43fJt6734kMC3odL0k19w4LKXWiujt64p+5pla1cG6uSejbbq5M23l3tZkssAAGbUe5Keir9TGxBOnewflSz/hsnOdCY7KOnxKkNG3kHA8FOwTKq6h0mPpDPZVCNnEDXnOie7Lp+l9DsoM16rf6Yc7jfcCJWVFAqvtFbmf7xPz/+XuzU5/vZ5/zY5/rZ2/VlCx/ccCtTJndx0U7llRPL0BweAqkLRqMu/v9qK1naXx8gzA2w4wmRK0n5JPS5ssteNLuEe1yvLruFzbJE03IiWLjOT77BcGgNtwrFtuBrzWv3TtJrarjncQ5d/F0OlKRSlWyvv8MbY/SPf/7l+8Rf/47y/H/nyn+itx58L1Ik9G22tZCwlM1cBwLka1lJpDFZZWU26/HlyNT5+aFyQTJjWqv1yb5Koz4ZhSI15cNNd5bXaoWJ32MF6BJN0JtudzmRHVZxkM+riphMOtpfy6Kl1Ui9OCpKqm/117gFdcJrlE+u61Tq8S80vvdPwHc7v+qX+7aYNet/vfkySdPiZ5wN5Yk/FN5cbS5knVALAuRVtB5UjV0OlWbpgQM66pe2oQQuR7fbWU5I8V643SGo3IajT/LcWC3V/Nky9n+J9sWHT6vdIlZvqUbHFa7uklNuh3IzhTKh2szPbtlJ6tv5pZvgdsPwe6E1nsu2souBSqDQnIVnqJnXirrt1wUsPNz5szZmMJ4iT80xtXKWTV64r+yCACwAItIFIJNKoazxVKBT8WLm0bWUbq9F9NOUwVLpeUTNraFqHmAbN+jmQzmQbVeb767jPiQq6TXbWKDgSKM+v/8qFYCkVW4u3pDPZMRV7LAw6DZimfPSan5qVAxNYbbc/4PH6p+1DvagJ1sl6fEeZ3gU1+d6u9hpucfHDJEtdVKdXrNbknR9W25M/reqXHP/l63p2y+9Yv2euwz9YuIXSdvsnDx4+589N+97Whf/8kNU2mva97cpJOBtt1cSn+iqpCNFKCQRbI1uMcj49ZrahcrRGFdVR02ph0yVxqIbdDodk18rRKfe7BXu9zNdz0pWOOgdGAmX9guX0+b1H0j1muyPmXjO8wP11uiW60/zUc8yZkyDl9bLipKdIvUJltIbnt+rvjxaXL6pEqZ09/rHNat43WlU32Kmjp5T/8b6qP++psYVbKKvdflP+tJp2HWzIlXCq51PlJueZLvwAgHN1eyg8pyxDZS0fFI5aVmQ2yIV1MuF5eRUn5cmF/UDUIFjOtt78TE+i9IAX9tm0hto+3Nju9UmczBAE24d60XQmmwj75JctLm+vX9KuUi84cdfdWnrom2rKn3b8SyY3Xa+m8WLL+VTHVZKk5jffUOTkyZk/S1LTqZNqe/KnOtl7W3Fnx/arZddBtaxYpPff+zm1RVdo/MXdmpqY0DvPPK+Vd2xS/qWXdGVvTJP5o8r/8hdqixYfPh5/7VUtu+JKSdL47j1qX7dWJ948pLcef04dX+zRiTcP6UhueGa7r/z9N3V8zyFdtvnmYth78221r1urQ0/t1Mo7Nmns4R266PYbtPp3epT/5c819vCOqg/+5KbrdfLaW8q9bMhMWw8AOD8M2YatWlVsculMttIWwrEa39dt97ObohR4IwrHLK+2wXLUPFCJhmCXk3V6TyMMyH7yqqS83wpbU00uX1DDkraVes3pFat1qudTVf2eqRs+oqmOqzTVcZVO3HinCstX6NRtt+vkJ39PheUrdOLGOzV53Y06/rHNmrzzwzpx452aev9anW0vBsTf+IM7dPmdcS1d3amWxUu09v6v69p7/6vWfO4+Xdkb08W3fkrtH9yo6LX/ofh3n/6Mlr//Gl1331d0yU23adH7LtV1931FH/zSX2rZ2pW67r6v6Iq7Yur8Qt/MdqddcVdMV9wVU/u6tcXX9fXouvu+okWdy3Xj33xHS1d36vLf+l21rFhU1TE5c+3FmvhE2WWh8ioO1gYAzOKFSXrmUWkFpdYVNdv97KREBdq2eF9sA4Fy3npwTsWHKiNB3k/TSmnbDXOHX8qMyTO2a5F2NGKJmMCGyllfbiUXbz557S2avPPDVf2Syetu1OR1N0qSWvf8TKdXrNbpFavVuudnxb87+GtFJid0dtFiSVLzWwdmWjclqa39Ur06mNarj+7Q5Pjbuvy3/0ivfecbM//+8t9t097kw3p3z7N69X89qneef0GSdPgnP1J+1y9ntnHF3Z8+77Pt+/bfL7jm5RV3f0GSdPHHi5/9hc//qZ6NfUFTR085PhZno606cdfd5WZ7lYqT8/AlAADns14Ko9YTs5Rbssuox3rDtt8bHRSnQBqTtCneF2MITfn7Qrek7QHeTSdlwG9zeTi5ryYJle5eTOOqoDXs+Mc26/RH17jyO1t2HVTzscNqPnZYLWYs48lrb1HL8SNqfaH4nX/mstUzLZWvP/aU3vjXb2vt/V/XRd0b9MaTaUnSa5kdeuXvv6l39zyrG//mO1q2duV5v+uSm25Ty4XvhbfL74xrcrw4yc7oNzJ6d8+z2vjVlC66/YZ5P2tb+6XF0LvsAkmqKkzOhPTP/EedXrG63MuGmJwHAFwLlfVqiRio8t/dqiRbCfsT+4DJS9oa74t1Mn6y8rpwvC+WkLRZ1a1l6TmmV0eP5duG/FZ2KnyoN1eXWcKHUOniichJ2lo2WN4e15lrL3b0O9r2Pq+2ve/N4Npy/Ihajh+Z+fOS55/UBX/1sJoPHJdUbKmcdlH3Bk28/mrxde9bqRMHi7PDnhp9V5fcdrOOHxgtbvPC81v+Dv/kRzN/f/iZJ9TWfqne+fH3Zrab37tHkrT4fe87/73PPKGJ/S8W//9Hz0mS1m37stZt+7Iuuv0GdXyxx/o4nPjM7+rUyg9U8oXQKwCAW6GyXrObpkpUSuu53ttIjY8nPBomJXXG+2JJDoej+vCgit3Bt/ng426r8L7mpCykfHoKnXzu0LbkN9XwQkqqTH/kQttSHYv/Z+tg2fTWQTXlj6opf1SLDr383t+9VWylXHToZTXlj868ftGhl1WIXqSzl62aCZJX3P0FHX7mCb3+2FM68eYhHX7mieK/rfoNXX5nXG/867eV//E+5ffu0Yk3D2nq2IQOP/PEzJjKw888odeeyOrwM0/oUO5p5ffuOWe7b/3LD4t35L17ZraR37tHr3zrIR1+5gkd33NIr3zjL3TxrcXxpRdceaValy+3DpQVTMwjSQnWpAQAV0PQaJ0qpeMlKjaDdby32+5vJ0XKt8Yk3TsdJqk/VH8Nmy7DV0na4cGPuF3SVfG+WH+5c21aKW0nsBnz8ayoTh7abTHHKXRaarz9XvNFFC0XLC9M/13FS40sfuzpmf9v2/nieX+39GuPnvP6uX8ee3jHObOtvvX4c3rr8WLL4d77H9Le+99bY/LXX/3WzP//9D/92TnvOee/em5m27PNfv/0aw5+699m/m32v9coUG5ltlcAKFlRapf9OMBcnSs298zz98k6foZh2XV5o6XSX0ZUnLV0sNZjhUMcLkcl9ZrAkXQQztw03cshZTnXhpNWuKSPz5mT5UWk4jDAZNjKeFOtT4aKg5VL9id32mIZVhaBcgddVgCgJgFotF4fzlT65k76Ue/13kbrcExRH0OmPG2VtEnSCjOba5JAWZ/r2Yy3XKFii3A9Z4rdIWlzvC/Wbs53xde1efiWsA2vAVi70UlrZb85XqHSUoeLZzidyfarzIKwTlosCZQljShYy4fkavz6WlXCtvrsM4fpc4/67BpIeehY+6VM2LApO2rATNopnfu0PNWAc7qVMl+T+0muDtfheEACo22Z8Ox93jS8DEgaMK2XvSo2xHTLvXUuR8zxyrnQa63dQcDyfZkzOeZes/+2x2u8gvK51SO7WvV9KFIoFOrySdOZbKJcsJSkyOSElv5gcKZbK4rORlt1Kr5ZJ69cV8nLxyRtYBwEAARHOpPNqbg23FC8L9bNEQECe613qjguuduEk9kt/11z6nujc4LBuKRhZupFvdUtVJqLJKUK+yUvef5JLR78EWdI0pnVy3Qi/seVLBsiFbsad9OFBQACV9FMqPhwdjNj5QEAoQ2VtsFy8au7tSj9uJryp0N7gk5/dI2O3x5XoW0pgRIACJY5WikBAKEPlbbBsvnYYS39XkYtuw6G6sScjbZq8o4unVhXcd2BQAkAAAAgHKHSBMuFpkif15LdObU9NRSKVsupjat08pO/V2l3VwIlAAAAgPCFShMsE6pg8p5pQW+1dNA6KRVn9upmUh4AAAAAoQuVJlj2qjhFdMXTJy869LIWPZ5V84HjgTkRk5uu18QneisdOzltSFIvgRIAAABAaEOlCZYbJA1K6rB53+KXnlXb/93p63A5uel6nbz5dp258BLbt26L98X6KcIAAAAAQh8qTbBsV7HFssf2vX4Ml1WEybykBNPJAwAAACBUzh8u+yUlZdEddtqiQy+r5ecvqG3ni5482GdWL9Ppj2zQyfVdtt1cp42o2N11lKILAAAAgFC5cLDcoGKr5XpHOzU5oUX7d6t1z88aPqnP2Wirpj50jaZu+IhOrfxANZvaGu+LJSmyAAAAAAiVlYdLx62WcwNm82v71Pyrsbp0kZ3auEpTHVdp6v1rbZYFWciQpH6WCwEAAABAqHQWLDtNsNzixvaajx1W69GDirz5ulrG9ivydr6qoDm1cZXOtrfr7GWrdPayVdW2Rs6WN2EyRTEFAAAAQKisPlx2m3DZVYvtNx87rJbjR2b+3PTaK+f8e2H5ChWiF8382cXwOF+YHJA0wFIhAAAAAAiVPguXDUSYBAAAAECorHO47JeDJUgIkwAAAAAQ8lA5K1x2mnCZUBUT+jTAkKQUYyYBAAAAECq9EzB7JU3/eDFgjqi4VMoga00CAAAAIFR6P2B2m5/1DfoYeUk580OQBAAAAECo9GnAbDfhcsOs/9aiJXNE0vD0T7wvlqOIAQAAACBUBjdobpDUaX5kAmclRs2PVGyFHI/3xYYpTgAAAAAIlQAAAAAAVKiJQwAAAAAAIFQCAAAAAAiVAAAAAABCJQAAAACAUAkAAAAAAKESAAAAAECoBAAAAAAQKgEAAAAAhEoAAAAAAKESAAAAAABCJQAAAACAUAkAAAAAIFQCAAAAAAiVAAAAAAAQKgEAAAAAhEoAAAAAAKESAAAAAECoBAAAAAAQKgEAAAAAIFQCAAAAAAiVAAAAAABCJQAAAAAg0P4//U9DqP/Pc9YAAAAASUVORK5CYII="
};
/*...
 	jspdf.plugin.autotable.min.js
*/

/*!
 * jsPDF AutoTable plugin v2.3.5
 * Copyright (c) 2014 Simon Bengtsson, https://github.com/simonbengtsson/jsPDF-AutoTable 
 * 
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * 
 * * /if (typeof window === 'object') window.jspdfAutoTableVersion = '2.3.5';/*
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jspdf"));
	else if(typeof define === 'function' && define.amd)
		define(["jspdf"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("jspdf")) : factory(root["jsPDF"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__18__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Ratio between font size and font height. The number comes from jspdf's source code
 */
exports.FONT_ROW_RATIO = 1.15;
var models_1 = __webpack_require__(4);
var table = null;
var assign = __webpack_require__(5);
var entries = __webpack_require__(19);
/**
 * Styles for the themes (overriding the default styles)
 */
exports.getTheme = function (name) {
    var themes = {
        'striped': {
            table: { fillColor: 255, textColor: 80, fontStyle: 'normal' },
            header: { textColor: 255, fillColor: [41, 128, 185], fontStyle: 'bold' },
            body: {},
            alternateRow: { fillColor: 245 }
        },
        'grid': {
            table: { fillColor: 255, textColor: 80, fontStyle: 'normal', lineWidth: 0.1 },
            header: { textColor: 255, fillColor: [46, 68, 83], fontStyle: 'bold', lineWidth: 0 },
            body: {},
            alternateRow: {}
        },
        'plain': {
            header: { fontStyle: 'bold' }
        }
    };
    return themes[name];
};
function getDefaults() {
    var scaleFactor = Config.scaleFactor();
    return {
        // Styling
        theme: 'striped',
        styles: {},
        headerStyles: {},
        bodyStyles: {},
        alternateRowStyles: {},
        columnStyles: {},
        // Properties
        startY: false,
        margin: 40 / scaleFactor,
        pageBreak: 'auto',
        tableWidth: 'auto',
        showHeader: 'everyPage',
        tableLineWidth: 0,
        tableLineColor: 200,
        // Hooks
        createdHeaderCell: function (cell, data) { },
        createdCell: function (cell, data) { },
        drawHeaderRow: function (row, data) { },
        drawRow: function (row, data) { },
        drawHeaderCell: function (cell, data) { },
        drawCell: function (cell, data) { },
        addPageContent: function (data) { }
    };
}
exports.getDefaults = getDefaults;
// Base style for all themes
function defaultStyles() {
    var scaleFactor = Config.scaleFactor();
    return {
        font: "helvetica",
        fontStyle: 'normal',
        overflow: 'ellipsize',
        fillColor: false,
        textColor: 20,
        halign: 'left',
        valign: 'top',
        fontSize: sk.pdf.fontSize,
        cellPadding: 5 / scaleFactor,
        lineColor: 200,
        lineWidth: 0 / scaleFactor,
        columnWidth: 'auto'
    };
}
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.pageSize = function () {
        var pageSize = table.doc.internal.pageSize;
        // JSPDF 1.4 uses get functions instead of properties on pageSize
        if (pageSize.width == null) {
            pageSize = {
                width: pageSize.getWidth(),
                height: pageSize.getHeight()
            };
        }
        return pageSize;
    };
    Config.applyUserStyles = function () {
        Config.applyStyles(table.userStyles);
    };
    Config.createTable = function (doc) {
        table = new models_1.Table(doc);
        return table;
    };
    Config.tableInstance = function () {
        return table;
    };
    Config.scaleFactor = function () {
        return table.doc.internal.scaleFactor;
    };
    Config.hooksData = function (additionalData) {
        if (additionalData === void 0) { additionalData = {}; }
        return assign({
            pageCount: table.pageCount,
            settings: table.settings,
            table: table,
            doc: table.doc,
            cursor: table.cursor
        }, additionalData || {});
    };
    Config.initSettings = function (table, allOptions) {
        var _loop_1 = function (styleProp) {
            var styles = allOptions.map(function (opts) { return opts[styleProp] || {}; });
            table.styles[styleProp] = assign.apply(void 0, [{}].concat(styles));
        };
        // Merge styles one level deeper
        for (var _i = 0, _a = Object.keys(table.styles); _i < _a.length; _i++) {
            var styleProp = _a[_i];
            _loop_1(styleProp);
        }
        // Append event handlers instead of replacing them
        for (var _b = 0, _c = entries(table.hooks); _b < _c.length; _b++) {
            var _d = _c[_b], hookName = _d[0], list = _d[1];
            for (var _e = 0, allOptions_1 = allOptions; _e < allOptions_1.length; _e++) {
                var opts = allOptions_1[_e];
                if (opts && opts[hookName]) {
                    list.push(opts[hookName]);
                }
            }
        }
        // Merge all other options one level
        table.settings = assign.apply(void 0, [getDefaults()].concat(allOptions));
    };
    // This is messy, only keep array and number format the next major version
    Config.marginOrPadding = function (value, defaultValue) {
        var newValue = {};
        if (Array.isArray(value)) {
            if (value.length >= 4) {
                newValue = { 'top': value[0], 'right': value[1], 'bottom': value[2], 'left': value[3] };
            }
            else if (value.length === 3) {
                newValue = { 'top': value[0], 'right': value[1], 'bottom': value[2], 'left': value[1] };
            }
            else if (value.length === 2) {
                newValue = { 'top': value[0], 'right': value[1], 'bottom': value[0], 'left': value[1] };
            }
            else if (value.length === 1) {
                value = value[0];
            }
            else {
                value = defaultValue;
            }
        }
        else if (typeof value === 'object') {
            if (value['vertical']) {
                value['top'] = value['vertical'];
                value['bottom'] = value['vertical'];
            }
            else if (value['horizontal']) {
                value['right'] = value['horizontal'];
                value['left'] = value['horizontal'];
            }
            for (var _i = 0, _a = ['top', 'right', 'bottom', 'left']; _i < _a.length; _i++) {
                var side = _a[_i];
                newValue[side] = value[side] || value[side] === 0 ? value[side] : defaultValue;
            }
        }
        if (typeof value === 'number') {
            newValue = { 'top': value, 'right': value, 'bottom': value, 'left': value };
        }
        return newValue;
    };
    Config.styles = function (styles) {
        styles = Array.isArray(styles) ? styles : [styles];
        return assign.apply(void 0, [defaultStyles()].concat(styles));
    };
    Config.applyStyles = function (styles) {
        var doc = table.doc;
        var styleModifiers = {
            fillColor: doc.setFillColor,
            textColor: doc.setTextColor,
            fontStyle: doc.setFontStyle,
            lineColor: doc.setDrawColor,
            lineWidth: doc.setLineWidth,
            font: doc.setFont,
            fontSize: doc.setFontSize
        };
        Object.keys(styleModifiers).forEach(function (name) {
            var style = styles[name];
            var modifier = styleModifiers[name];
            if (typeof style !== 'undefined') {
                if (Array.isArray(style)) {
                    modifier.apply(this, style);
                }
                else {
                    modifier(style);
                }
            }
        });
    };
    return Config;
}());
exports.Config = Config;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fnToStr = Function.prototype.toString;

var constructorRegex = /^\s*class /;
var isES6ClassFn = function isES6ClassFn(value) {
	try {
		var fnStr = fnToStr.call(value);
		var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
		var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
		var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
		return constructorRegex.test(spaceStripped);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionObject(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isCallable(value) {
	if (!value) { return false; }
	if (typeof value !== 'function' && typeof value !== 'object') { return false; }
	if (hasToStringTag) { return tryFunctionObject(value); }
	if (isES6ClassFn(value)) { return false; }
	var strClass = toStr.call(value);
	return strClass === fnClass || strClass === genClass;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var implementation = __webpack_require__(29);

module.exports = Function.prototype.bind || implementation;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var config_1 = __webpack_require__(0);
var painter_1 = __webpack_require__(16);
function getStringWidth(text, styles) {
    var k = config_1.Config.scaleFactor();
    var fontSize = styles.fontSize / k;
    config_1.Config.applyStyles(styles);
    text = Array.isArray(text) ? text : [text];
    var maxWidth = 0;
    text.forEach(function (line) {
        var width = config_1.Config.tableInstance().doc.getStringUnitWidth(line);
        if (width > maxWidth) {
            maxWidth = width;
        }
    });
    var precision = 10000 * k;
    maxWidth = Math.floor(maxWidth * precision) / precision;
    return maxWidth * fontSize;
}
exports.getStringWidth = getStringWidth;
/**
 * Ellipsize the text to fit in the width
 */
function ellipsize(text, width, styles, ellipsizeStr) {
    if (ellipsizeStr === void 0) { ellipsizeStr = '...'; }
    if (Array.isArray(text)) {
        var value_1 = [];
        text.forEach(function (str, i) {
            value_1[i] = ellipsize(str, width, styles, ellipsizeStr);
        });
        return value_1;
    }
    var precision = 10000 * config_1.Config.scaleFactor();
    width = Math.ceil(width * precision) / precision;
    if (width >= getStringWidth(text, styles)) {
        return text;
    }
    while (width < getStringWidth(text + ellipsizeStr, styles)) {
        if (text.length <= 1) {
            break;
        }
        text = text.substring(0, text.length - 1);
    }
    return text.trim() + ellipsizeStr;
}
exports.ellipsize = ellipsize;
function addTableBorder() {
    var table = config_1.Config.tableInstance();
    var styles = { lineWidth: table.settings.tableLineWidth, lineColor: table.settings.tableLineColor };
    config_1.Config.applyStyles(styles);
    var fs = getFillStyle(styles);
    if (fs) {
        table.doc.rect(table.pageStartX, table.pageStartY, table.width, table.cursor.y - table.pageStartY, fs);
    }
}
exports.addTableBorder = addTableBorder;
function addPage() {
    var table = config_1.Config.tableInstance();
    table.finalY = table.cursor.y;
    // Add user content just before adding new page ensure it will 
    // be drawn above other things on the page
    addContentHooks();
    addTableBorder();
    nextPage(table.doc);
    table.pageCount++;
    table.cursor = { x: table.margin('left'), y: table.margin('top') };
    table.pageStartX = table.cursor.x;
    table.pageStartY = table.cursor.y;
    if (table.settings.showHeader === true || table.settings.showHeader === 'everyPage') {
        painter_1.printRow(table.headerRow, table.hooks.drawHeaderRow, table.hooks.drawHeaderCell);
    }
}
exports.addPage = addPage;
function addContentHooks() {
    for (var _i = 0, _a = config_1.Config.tableInstance().hooks.addPageContent; _i < _a.length; _i++) {
        var hook = _a[_i];
        config_1.Config.applyUserStyles();
        hook(config_1.Config.hooksData());
    }
    config_1.Config.applyUserStyles();
}
exports.addContentHooks = addContentHooks;
function getFillStyle(styles) {
    var drawLine = styles.lineWidth > 0;
    var drawBackground = styles.fillColor || styles.fillColor === 0;
    if (drawLine && drawBackground) {
        return 'DF'; // Fill then stroke
    }
    else if (drawLine) {
        return 'S'; // Only stroke (transparent background)
    }
    else if (drawBackground) {
        return 'F'; // Only fill, no stroke
    }
    else {
        return false;
    }
}
exports.getFillStyle = getFillStyle;
function nextPage(doc) {
    var current = doc.internal.getCurrentPageInfo().pageNumber;
    doc.setPage(current + 1);
    var newCurrent = doc.internal.getCurrentPageInfo().pageNumber;
    if (newCurrent === current) {
        doc.addPage();
    }
}
exports.nextPage = nextPage;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var config_1 = __webpack_require__(0);
exports.table = {};
var Table = /** @class */ (function () {
    function Table(doc) {
        this.height = 0;
        this.width = 0;
        this.contentWidth = 0;
        this.preferredWidth = 0;
        this.rows = [];
        this.columns = [];
        this.headerRow = null;
        this.pageCount = 1;
        this.hooks = {
            createdHeaderCell: [],
            createdCell: [],
            drawHeaderRow: [],
            drawRow: [],
            drawHeaderCell: [],
            drawCell: [],
            addPageContent: []
        };
        this.styles = {
            styles: {},
            headerStyles: {},
            bodyStyles: {},
            alternateRowStyles: {},
            columnStyles: {}
        };
        this.doc = doc;
        this.userStyles = {
            textColor: 30,
            fontSize: doc.internal.getFontSize(),
            fontStyle: doc.internal.getFont().fontStyle
        };
    }
    Table.prototype.margin = function (side) {
        return config_1.Config.marginOrPadding(this.settings.margin, config_1.getDefaults().margin)[side];
    };
    return Table;
}());
exports.Table = Table;
var Row = /** @class */ (function () {
    function Row(raw, index) {
        this.cells = {};
        this.spansMultiplePages = false;
        this.pageCount = 1;
        this.height = 0;
        this.y = 0;
        this.maxLineCount = 1;
        this.raw = raw;
        this.index = index;
    }
    return Row;
}());
exports.Row = Row;
var Cell = /** @class */ (function () {
    function Cell(raw) {
        this.styles = {};
        this.text = '';
        this.contentWidth = 0;
        this.textPos = {};
        this.height = 0;
        this.width = 0;
        this.x = 0;
        this.y = 0;
        this.raw = raw;
    }
    Cell.prototype.padding = function (name) {
        var padding = config_1.Config.marginOrPadding(this.styles.cellPadding, config_1.Config.styles([]).cellPadding);
        if (name === 'vertical') {
            return padding.top + padding.bottom;
        }
        else if (name === 'horizontal') {
            return padding.left + padding.right;
        }
        else {
            return padding[name];
        }
    };
    return Cell;
}());
exports.Cell = Cell;
var Column = /** @class */ (function () {
    function Column(dataKey, index) {
        this.options = {};
        this.contentWidth = 0;
        this.preferredWidth = 0;
        this.widthStyle = 'auto';
        this.width = 0;
        this.x = 0;
        this.dataKey = dataKey;
        this.index = index;
    }
    return Column;
}());
exports.Column = Column;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(20);
var foreach = __webpack_require__(22);
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

var toStr = Object.prototype.toString;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
        /* eslint-disable no-unused-vars, no-restricted-syntax */
        for (var _ in obj) { return false; }
        /* eslint-enable no-unused-vars, no-restricted-syntax */
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		Object.defineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = props.concat(Object.getOwnPropertySymbols(map));
	}
	foreach(props, function (name) {
		defineProperty(object, name, map[name], predicates[name]);
	});
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES = __webpack_require__(23);
var has = __webpack_require__(14);
var bind = __webpack_require__(2);
var isEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);

module.exports = function entries(O) {
	var obj = ES.RequireObjectCoercible(O);
	var entrys = [];
	for (var key in obj) {
		if (has(obj, key) && isEnumerable(obj, key)) {
			entrys.push([key, obj[key]]);
		}
	}
	return entrys;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var $isNaN = Number.isNaN || function (a) { return a !== a; };

module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var has = Object.prototype.hasOwnProperty;
module.exports = Object.assign || function assign(target, source) {
	for (var key in source) {
		if (has.call(source, key)) {
			target[key] = source[key];
		}
	}
	return target;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function sign(number) {
	return number >= 0 ? 1 : -1;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function mod(number, modulo) {
	var remain = number % modulo;
	return Math.floor(remain >= 0 ? remain : remain + modulo);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(2);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(7);

module.exports = function getPolyfill() {
	return typeof Object.entries === 'function' ? Object.entries : implementation;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var config_1 = __webpack_require__(0);
var common_1 = __webpack_require__(3);
function printFullRow(row, drawRowHooks, drawCellHooks) {
    var remainingRowHeight = 0;
    var remainingTexts = {};
    var table = config_1.Config.tableInstance();
    if (!canFitOnPage(row.height)) {
        if (row.maxLineCount <= 1) {
            common_1.addPage();
        }
        else {
            // Modify the row to fit the current page and calculate text and height of partial row
            row.spansMultiplePages = true;
            var pageHeight = config_1.Config.pageSize().height;
            var maxCellHeight = 0;
            for (var j = 0; j < table.columns.length; j++) {
                var col = table.columns[j];
                var cell = row.cells[col.dataKey];
                var fontHeight = cell.styles.fontSize / config_1.Config.scaleFactor() * config_1.FONT_ROW_RATIO;
                var vPadding = cell.padding('vertical');
                var remainingPageSpace = pageHeight - table.cursor.y - table.margin('bottom');
                var remainingLineCount = Math.floor((remainingPageSpace - vPadding) / fontHeight);
                // Splice with negative values results in unexpected results, therefore eliminate
                // scenarios where less than one line is remaining, but are shown
                if (remainingLineCount < 0) {
                    remainingLineCount = 0;
                }
                if (Array.isArray(cell.text) && cell.text.length > remainingLineCount) {
                    var remainingLines = cell.text.splice(remainingLineCount, cell.text.length);
                    remainingTexts[col.dataKey] = remainingLines;
                    var cellHeight = cell.text.length * fontHeight + vPadding;
                    if (cellHeight > maxCellHeight) {
                        maxCellHeight = cellHeight;
                    }
                    var rCellHeight = remainingLines.length * fontHeight + vPadding;
                    if (rCellHeight > remainingRowHeight) {
                        remainingRowHeight = rCellHeight;
                    }
                }
            }
            // Reset row height since text are now removed
            row.height = maxCellHeight;
        }
    }
    printRow(row, drawRowHooks, drawCellHooks);
    // Parts of the row is now printed. Time for adding a new page, prune 
    // the text and start over
    if (Object.keys(remainingTexts).length > 0) {
        for (var j = 0; j < table.columns.length; j++) {
            var col = table.columns[j];
            var cell = row.cells[col.dataKey];
            cell.text = remainingTexts[col.dataKey] || '';
        }
        common_1.addPage();
        row.pageCount++;
        row.height = remainingRowHeight;
        printFullRow(row, drawRowHooks, drawCellHooks);
    }
}
exports.printFullRow = printFullRow;
function printRow(row, drawRowHooks, drawCellHooks) {
    var table = config_1.Config.tableInstance();
    row.y = table.cursor.y;
    for (var _i = 0, drawRowHooks_1 = drawRowHooks; _i < drawRowHooks_1.length; _i++) {
        var hook = drawRowHooks_1[_i];
        if (hook(row, config_1.Config.hooksData({ row: row, addPage: common_1.addPage })) === false) {
            return;
        }
    }
    table.cursor.x = table.margin('left');
    for (var i = 0; i < table.columns.length; i++) {
        var column = table.columns[i];
        var cell = row.cells[column.dataKey];
        if (!cell) {
            continue;
        }
        config_1.Config.applyStyles(cell.styles);
        cell.x = table.cursor.x;
        cell.y = table.cursor.y;
        cell.height = row.height;
        cell.width = column.width;
        if (cell.styles.valign === 'top') {
            cell.textPos.y = table.cursor.y + cell.padding('top');
        }
        else if (cell.styles.valign === 'bottom') {
            cell.textPos.y = table.cursor.y + row.height - cell.padding('bottom');
        }
        else {
            cell.textPos.y = table.cursor.y + row.height / 2;
        }
        if (cell.styles.halign === 'right') {
            cell.textPos.x = cell.x + cell.width - cell.padding('right');
        }
        else if (cell.styles.halign === 'center') {
            cell.textPos.x = cell.x + cell.width / 2;
        }
        else {
            cell.textPos.x = cell.x + cell.padding('left');
        }
        var shouldDrawCell = true;
        var data = config_1.Config.hooksData({ column: column, row: row, addPage: common_1.addPage });
        for (var _a = 0, drawCellHooks_1 = drawCellHooks; _a < drawCellHooks_1.length; _a++) {
            var hook = drawCellHooks_1[_a];
            if (hook(cell, data) === false) {
                shouldDrawCell = false;
            }
        }
        if (shouldDrawCell) {
            var fillStyle = common_1.getFillStyle(cell.styles);
            if (fillStyle) {
                table.doc.rect(cell.x, cell.y, cell.width, cell.height, fillStyle);
            }
            table.doc.autoTableText(cell.text, cell.textPos.x, cell.textPos.y, {
                halign: cell.styles.halign,
                valign: cell.styles.valign
            });
        }
        table.cursor.x += cell.width;
    }
    table.cursor.y += row.height;
}
exports.printRow = printRow;
function canFitOnPage(rowHeight) {
    var table = config_1.Config.tableInstance();
    var pos = rowHeight + table.cursor.y + table.margin('bottom');
    return pos < config_1.Config.pageSize().height;
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var jsPDF = __webpack_require__(18);
var config_1 = __webpack_require__(0);
var common_1 = __webpack_require__(3);
var painter_1 = __webpack_require__(16);
var calculator_1 = __webpack_require__(34);
var creator_1 = __webpack_require__(35);
/**
 * Create a table from a set of rows and columns.
 *
 * @param {Object[]|String[]} headers Either as an array of objects or array of strings
 * @param {Object[][]|String[][]} data Either as an array of objects or array of strings
 * @param {Object} [tableOptions={}] Options that will override the default ones
 */
jsPDF.API.autoTable = function (headers, data, tableOptions) {
    if (tableOptions === void 0) { tableOptions = {}; }
    this.autoTableState = this.autoTableState || {};
    jsPDF.autoTableState = jsPDF.autoTableState || {};
    var allOptions = [jsPDF.autoTableState.defaults || {}, this.autoTableState.defaults || {}, tableOptions || {}];
    creator_1.validateInput(headers, data, allOptions);
    var table = config_1.Config.createTable(this);
    config_1.Config.initSettings(table, allOptions);
    var settings = table.settings;
    // Create the table model with its columns, rows and cells
    creator_1.createModels(headers, data);
    settings.margin = config_1.Config.marginOrPadding(settings.margin, config_1.getDefaults().margin);
    calculator_1.calculateWidths(this, config_1.Config.pageSize().width);
    table.cursor = {
        x: table.margin('left'),
        y: settings.startY === false ? table.margin('top') : settings.startY
    };
    var minTableBottomPos = settings.startY + table.margin('bottom') + table.headerRow.height;
    if (settings.pageBreak === 'avoid') {
        minTableBottomPos += table.height;
    }
    var pageHeight = config_1.Config.pageSize().height;
    if ((settings.pageBreak === 'always' && settings.startY !== false) ||
        (settings.startY !== false && minTableBottomPos > pageHeight)) {
        common_1.nextPage(table.doc);
        table.cursor.y = table.margin('top');
    }
    table.pageStartX = table.cursor.x;
    table.pageStartY = table.cursor.y;
    config_1.Config.applyUserStyles();
    if (settings.showHeader === true || settings.showHeader === 'firstPage' || settings.showHeader === 'everyPage') {
        painter_1.printRow(table.headerRow, table.hooks.drawHeaderRow, table.hooks.drawHeaderCell);
    }
    config_1.Config.applyUserStyles();
    table.rows.forEach(function (row) {
        painter_1.printFullRow(row, table.hooks.drawRow, table.hooks.drawCell);
    });
    common_1.addTableBorder();
    // Don't call global and document addPageContent more than once for each page
    var pageNumber = this.internal.getCurrentPageInfo().pageNumber;
    if (this.autoTableState.addPageHookPages && this.autoTableState.addPageHookPages[pageNumber]) {
        if (typeof tableOptions['addPageContent'] === 'function') {
            tableOptions['addPageContent'](config_1.Config.hooksData());
        }
    }
    else {
        if (!this.autoTableState.addPageHookPages)
            this.autoTableState.addPageHookPages = {};
        this.autoTableState.addPageHookPages[pageNumber] = true;
        common_1.addContentHooks();
    }
    table.finalY = table.cursor.y;
    this.autoTable.previous = table;
    config_1.Config.applyUserStyles();
    return this;
};
// Enables doc.autoTable.previous.finalY || 40;
jsPDF.API.autoTable.previous = false;
jsPDF.API.autoTableSetDefaults = function (defaults) {
    if (!this.autoTableState)
        this.autoTableState = {};
    if (defaults && typeof defaults === 'object') {
        this.autoTableState.defaults = defaults;
    }
    else {
        delete this.autoTableState.defaults;
    }
    return this;
};
jsPDF.autoTableSetDefaults = function (defaults) {
    if (!jsPDF.autoTableState)
        jsPDF.autoTableState = {};
    if (defaults && typeof defaults === 'object') {
        this.autoTableState.defaults = defaults;
    }
    else {
        delete this.autoTableState.defaults;
    }
    jsPDF.autoTableState.defaults = defaults;
};
/**
 * Parses an html table
 *
 * @param tableElem Html table element
 * @param includeHiddenElements If to include hidden rows and columns (defaults to false)
 * @returns Object Object with two properties, columns and rows
 */
jsPDF.API.autoTableHtmlToJson = function (tableElem, includeHiddenElements) {
    includeHiddenElements = includeHiddenElements || false;
    if (!tableElem || !(tableElem instanceof HTMLTableElement)) {
        console.error("A HTMLTableElement has to be sent to autoTableHtmlToJson");
        return null;
    }
    var columns = {}, rows = [];
    var header = tableElem.rows[0];
    for (var i = 0; i < header.cells.length; i++) {
        var cell = header.cells[i];
        var style = window.getComputedStyle(cell);
        if (includeHiddenElements || style.display !== 'none') {
            columns[i] = cell;
        }
    }
    var _loop_1 = function (i) {
        var tableRow = tableElem.rows[i];
        var style = window.getComputedStyle(tableRow);
        if (includeHiddenElements || style.display !== 'none') {
            var rowData_1 = [];
            Object.keys(columns).forEach(function (key) {
                var cell = tableRow.cells[key];
                rowData_1.push(cell);
            });
            rows.push(rowData_1);
        }
    };
    for (var i = 1; i < tableElem.rows.length; i++) {
        _loop_1(i);
    }
    var values = Object.keys(columns).map(function (key) { return columns[key]; });
    return { columns: values, rows: rows, data: rows };
};
/**
 * Improved text function with halign and valign support
 * Inspiration from: http://stackoverflow.com/questions/28327510/align-text-right-using-jspdf/28433113#28433113
 */
jsPDF.API.autoTableText = function (text, x, y, styles) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        console.error('The x and y parameters are required. Missing for the text: ', text);
    }
    var k = this.internal.scaleFactor;
    var fontSize = this.internal.getFontSize() / k;
    var splitRegex = /\r\n|\r|\n/g;
    var splitText = null;
    var lineCount = 1;
    if (styles.valign === 'middle' || styles.valign === 'bottom' || styles.halign === 'center' || styles.halign === 'right') {
        splitText = typeof text === 'string' ? text.split(splitRegex) : text;
        lineCount = splitText.length || 1;
    }
    // Align the top
    y += fontSize * (2 - config_1.FONT_ROW_RATIO);
    if (styles.valign === 'middle')
        y -= (lineCount / 2) * fontSize * config_1.FONT_ROW_RATIO;
    else if (styles.valign === 'bottom')
        y -= lineCount * fontSize * config_1.FONT_ROW_RATIO;
    if (styles.halign === 'center' || styles.halign === 'right') {
        var alignSize = fontSize;
        if (styles.halign === 'center')
            alignSize *= 0.5;
        if (lineCount >= 1) {
            for (var iLine = 0; iLine < splitText.length; iLine++) {
                this.text(splitText[iLine], x - this.getStringUnitWidth(splitText[iLine]) * alignSize, y);
                y += fontSize;
            }
            return this;
        }
        x -= this.getStringUnitWidth(text) * alignSize;
    }
    this.text(text, x, y);
    return this;
};
/**
 * @deprecated Use doc.autoTable.previous.finalY instead
 */
jsPDF.API.autoTableEndPosY = function () {
    var prev = this.autoTable.previous;
    if (prev.cursor && typeof prev.cursor.y === 'number') {
        return prev.cursor.y;
    }
    else {
        return 0;
    }
};
/**
 * @deprecated Use jsPDF.autoTableSetDefaults({addPageContent: function() {}}) instead
 */
jsPDF.API.autoTableAddPageContent = function (hook) {
    if (!jsPDF.API.autoTable.globalDefaults) {
        jsPDF.API.autoTable.globalDefaults = {};
    }
    jsPDF.API.autoTable.globalDefaults.addPageContent = hook;
    return this;
};
/**
 * @deprecated Use data.addPage in hooks instead
 */
jsPDF.API.autoTableAddPage = function () {
    console.log('page added');
    common_1.addPage();
    return this;
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__18__;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(6);

var implementation = __webpack_require__(7);
var getPolyfill = __webpack_require__(15);
var shim = __webpack_require__(33);

var polyfill = getPolyfill();

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = __webpack_require__(21);
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) {
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES6 = __webpack_require__(24);
var assign = __webpack_require__(10);

var ES7 = assign(ES6, {
	// https://github.com/tc39/ecma262/pull/60
	SameValueNonNumber: function SameValueNonNumber(x, y) {
		if (typeof x === 'number' || typeof x !== typeof y) {
			throw new TypeError('SameValueNonNumber requires two non-number values of the same type.');
		}
		return this.SameValue(x, y);
	}
});

module.exports = ES7;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';
var symbolToStr = hasSymbols ? Symbol.prototype.toString : toStr;

var $isNaN = __webpack_require__(8);
var $isFinite = __webpack_require__(9);
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

var assign = __webpack_require__(10);
var sign = __webpack_require__(11);
var mod = __webpack_require__(12);
var isPrimitive = __webpack_require__(25);
var toPrimitive = __webpack_require__(26);
var parseInteger = parseInt;
var bind = __webpack_require__(2);
var strSlice = bind.call(Function.call, String.prototype.slice);
var isBinary = bind.call(Function.call, RegExp.prototype.test, /^0b[01]+$/i);
var isOctal = bind.call(Function.call, RegExp.prototype.test, /^0o[0-7]+$/i);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new RegExp('[' + nonWS + ']', 'g');
var hasNonWS = bind.call(Function.call, RegExp.prototype.test, nonWSregex);
var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;
var isInvalidHexLiteral = bind.call(Function.call, RegExp.prototype.test, invalidHexLiteral);

// whitespace from: http://es5.github.io/#x15.5.4.20
// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
var ws = [
	'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	'\u2029\uFEFF'
].join('');
var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
var replace = bind.call(Function.call, String.prototype.replace);
var trim = function (value) {
	return replace(value, trimRegex, '');
};

var ES5 = __webpack_require__(30);

var hasRegExpMatcher = __webpack_require__(32);

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-abstract-operations
var ES6 = assign(assign({}, ES5), {

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-call-f-v-args
	Call: function Call(F, V) {
		var args = arguments.length > 2 ? arguments[2] : [];
		if (!this.IsCallable(F)) {
			throw new TypeError(F + ' is not a function');
		}
		return F.apply(V, args);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toprimitive
	ToPrimitive: toPrimitive,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toboolean
	// ToBoolean: ES5.ToBoolean,

	// http://www.ecma-international.org/ecma-262/6.0/#sec-tonumber
	ToNumber: function ToNumber(argument) {
		var value = isPrimitive(argument) ? argument : toPrimitive(argument, 'number');
		if (typeof value === 'symbol') {
			throw new TypeError('Cannot convert a Symbol value to a number');
		}
		if (typeof value === 'string') {
			if (isBinary(value)) {
				return this.ToNumber(parseInteger(strSlice(value, 2), 2));
			} else if (isOctal(value)) {
				return this.ToNumber(parseInteger(strSlice(value, 2), 8));
			} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
				return NaN;
			} else {
				var trimmed = trim(value);
				if (trimmed !== value) {
					return this.ToNumber(trimmed);
				}
			}
		}
		return Number(value);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tointeger
	// ToInteger: ES5.ToNumber,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint32
	// ToInt32: ES5.ToInt32,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint32
	// ToUint32: ES5.ToUint32,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint16
	ToInt16: function ToInt16(argument) {
		var int16bit = this.ToUint16(argument);
		return int16bit >= 0x8000 ? int16bit - 0x10000 : int16bit;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint16
	// ToUint16: ES5.ToUint16,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint8
	ToInt8: function ToInt8(argument) {
		var int8bit = this.ToUint8(argument);
		return int8bit >= 0x80 ? int8bit - 0x100 : int8bit;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8
	ToUint8: function ToUint8(argument) {
		var number = this.ToNumber(argument);
		if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
		var posInt = sign(number) * Math.floor(Math.abs(number));
		return mod(posInt, 0x100);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8clamp
	ToUint8Clamp: function ToUint8Clamp(argument) {
		var number = this.ToNumber(argument);
		if ($isNaN(number) || number <= 0) { return 0; }
		if (number >= 0xFF) { return 0xFF; }
		var f = Math.floor(argument);
		if (f + 0.5 < number) { return f + 1; }
		if (number < f + 0.5) { return f; }
		if (f % 2 !== 0) { return f + 1; }
		return f;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tostring
	ToString: function ToString(argument) {
		if (typeof argument === 'symbol') {
			throw new TypeError('Cannot convert a Symbol value to a string');
		}
		return String(argument);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toobject
	ToObject: function ToObject(value) {
		this.RequireObjectCoercible(value);
		return Object(value);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
	ToPropertyKey: function ToPropertyKey(argument) {
		var key = this.ToPrimitive(argument, String);
		return typeof key === 'symbol' ? symbolToStr.call(key) : this.ToString(key);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	ToLength: function ToLength(argument) {
		var len = this.ToInteger(argument);
		if (len <= 0) { return 0; } // includes converting -0 to +0
		if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
		return len;
	},

	// http://www.ecma-international.org/ecma-262/6.0/#sec-canonicalnumericindexstring
	CanonicalNumericIndexString: function CanonicalNumericIndexString(argument) {
		if (toStr.call(argument) !== '[object String]') {
			throw new TypeError('must be a string');
		}
		if (argument === '-0') { return -0; }
		var n = this.ToNumber(argument);
		if (this.SameValue(this.ToString(n), argument)) { return n; }
		return void 0;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-requireobjectcoercible
	RequireObjectCoercible: ES5.CheckObjectCoercible,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
	IsArray: Array.isArray || function IsArray(argument) {
		return toStr.call(argument) === '[object Array]';
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iscallable
	// IsCallable: ES5.IsCallable,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
	IsConstructor: function IsConstructor(argument) {
		return typeof argument === 'function' && !!argument.prototype; // unfortunately there's no way to truly check this without try/catch `new argument`
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isextensible-o
	IsExtensible: function IsExtensible(obj) {
		if (!Object.preventExtensions) { return true; }
		if (isPrimitive(obj)) {
			return false;
		}
		return Object.isExtensible(obj);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isinteger
	IsInteger: function IsInteger(argument) {
		if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
			return false;
		}
		var abs = Math.abs(argument);
		return Math.floor(abs) === abs;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey
	IsPropertyKey: function IsPropertyKey(argument) {
		return typeof argument === 'string' || typeof argument === 'symbol';
	},

	// http://www.ecma-international.org/ecma-262/6.0/#sec-isregexp
	IsRegExp: function IsRegExp(argument) {
		if (!argument || typeof argument !== 'object') {
			return false;
		}
		if (hasSymbols) {
			var isRegExp = argument[Symbol.match];
			if (typeof isRegExp !== 'undefined') {
				return ES5.ToBoolean(isRegExp);
			}
		}
		return hasRegExpMatcher(argument);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevalue
	// SameValue: ES5.SameValue,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero
	SameValueZero: function SameValueZero(x, y) {
		return (x === y) || ($isNaN(x) && $isNaN(y));
	},

	/**
	 * 7.3.2 GetV (V, P)
	 * 1. Assert: IsPropertyKey(P) is true.
	 * 2. Let O be ToObject(V).
	 * 3. ReturnIfAbrupt(O).
	 * 4. Return O.[[Get]](P, V).
	 */
	GetV: function GetV(V, P) {
		// 7.3.2.1
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		// 7.3.2.2-3
		var O = this.ToObject(V);

		// 7.3.2.4
		return O[P];
	},

	/**
	 * 7.3.9 - http://www.ecma-international.org/ecma-262/6.0/#sec-getmethod
	 * 1. Assert: IsPropertyKey(P) is true.
	 * 2. Let func be GetV(O, P).
	 * 3. ReturnIfAbrupt(func).
	 * 4. If func is either undefined or null, return undefined.
	 * 5. If IsCallable(func) is false, throw a TypeError exception.
	 * 6. Return func.
	 */
	GetMethod: function GetMethod(O, P) {
		// 7.3.9.1
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		// 7.3.9.2
		var func = this.GetV(O, P);

		// 7.3.9.4
		if (func == null) {
			return undefined;
		}

		// 7.3.9.5
		if (!this.IsCallable(func)) {
			throw new TypeError(P + 'is not a function');
		}

		// 7.3.9.6
		return func;
	},

	/**
	 * 7.3.1 Get (O, P) - http://www.ecma-international.org/ecma-262/6.0/#sec-get-o-p
	 * 1. Assert: Type(O) is Object.
	 * 2. Assert: IsPropertyKey(P) is true.
	 * 3. Return O.[[Get]](P, O).
	 */
	Get: function Get(O, P) {
		// 7.3.1.1
		if (this.Type(O) !== 'Object') {
			throw new TypeError('Assertion failed: Type(O) is not Object');
		}
		// 7.3.1.2
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}
		// 7.3.1.3
		return O[P];
	},

	Type: function Type(x) {
		if (typeof x === 'symbol') {
			return 'Symbol';
		}
		return ES5.Type(x);
	},

	// http://www.ecma-international.org/ecma-262/6.0/#sec-speciesconstructor
	SpeciesConstructor: function SpeciesConstructor(O, defaultConstructor) {
		if (this.Type(O) !== 'Object') {
			throw new TypeError('Assertion failed: Type(O) is not Object');
		}
		var C = O.constructor;
		if (typeof C === 'undefined') {
			return defaultConstructor;
		}
		if (this.Type(C) !== 'Object') {
			throw new TypeError('O.constructor is not an Object');
		}
		var S = hasSymbols && Symbol.species ? C[Symbol.species] : undefined;
		if (S == null) {
			return defaultConstructor;
		}
		if (this.IsConstructor(S)) {
			return S;
		}
		throw new TypeError('no constructor found');
	}
});

delete ES6.CheckObjectCoercible; // renamed in ES6 to RequireObjectCoercible

module.exports = ES6;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var isPrimitive = __webpack_require__(13);
var isCallable = __webpack_require__(1);
var isDate = __webpack_require__(27);
var isSymbol = __webpack_require__(28);

var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
	if (typeof O === 'undefined' || O === null) {
		throw new TypeError('Cannot call method on ' + O);
	}
	if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
		throw new TypeError('hint must be "string" or "number"');
	}
	var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
	var method, result, i;
	for (i = 0; i < methodNames.length; ++i) {
		method = O[methodNames[i]];
		if (isCallable(method)) {
			result = method.call(O);
			if (isPrimitive(result)) {
				return result;
			}
		}
	}
	throw new TypeError('No default value');
};

var GetMethod = function GetMethod(O, P) {
	var func = O[P];
	if (func !== null && typeof func !== 'undefined') {
		if (!isCallable(func)) {
			throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
		}
		return func;
	}
};

// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
module.exports = function ToPrimitive(input, PreferredType) {
	if (isPrimitive(input)) {
		return input;
	}
	var hint = 'default';
	if (arguments.length > 1) {
		if (PreferredType === String) {
			hint = 'string';
		} else if (PreferredType === Number) {
			hint = 'number';
		}
	}

	var exoticToPrim;
	if (hasSymbols) {
		if (Symbol.toPrimitive) {
			exoticToPrim = GetMethod(input, Symbol.toPrimitive);
		} else if (isSymbol(input)) {
			exoticToPrim = Symbol.prototype.valueOf;
		}
	}
	if (typeof exoticToPrim !== 'undefined') {
		var result = exoticToPrim.call(input, hint);
		if (isPrimitive(result)) {
			return result;
		}
		throw new TypeError('unable to convert exotic object to primitive');
	}
	if (hint === 'default' && (isDate(input) || isSymbol(input))) {
		hint = 'string';
	}
	return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) { return false; }
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') { return false; }
		return symStringRegex.test(symToStr.call(value));
	};
	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') { return true; }
		if (toStr.call(value) !== '[object Symbol]') { return false; }
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {
	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return false;
	};
}


/***/ }),
/* 29 */
/***/ (function(module, exports) {

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $isNaN = __webpack_require__(8);
var $isFinite = __webpack_require__(9);

var sign = __webpack_require__(11);
var mod = __webpack_require__(12);

var IsCallable = __webpack_require__(1);
var toPrimitive = __webpack_require__(31);

// https://es5.github.io/#x9
var ES5 = {
	ToPrimitive: toPrimitive,

	ToBoolean: function ToBoolean(value) {
		return Boolean(value);
	},
	ToNumber: function ToNumber(value) {
		return Number(value);
	},
	ToInteger: function ToInteger(value) {
		var number = this.ToNumber(value);
		if ($isNaN(number)) { return 0; }
		if (number === 0 || !$isFinite(number)) { return number; }
		return sign(number) * Math.floor(Math.abs(number));
	},
	ToInt32: function ToInt32(x) {
		return this.ToNumber(x) >> 0;
	},
	ToUint32: function ToUint32(x) {
		return this.ToNumber(x) >>> 0;
	},
	ToUint16: function ToUint16(value) {
		var number = this.ToNumber(value);
		if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
		var posInt = sign(number) * Math.floor(Math.abs(number));
		return mod(posInt, 0x10000);
	},
	ToString: function ToString(value) {
		return String(value);
	},
	ToObject: function ToObject(value) {
		this.CheckObjectCoercible(value);
		return Object(value);
	},
	CheckObjectCoercible: function CheckObjectCoercible(value, optMessage) {
		/* jshint eqnull:true */
		if (value == null) {
			throw new TypeError(optMessage || 'Cannot call method on ' + value);
		}
		return value;
	},
	IsCallable: IsCallable,
	SameValue: function SameValue(x, y) {
		if (x === y) { // 0 === -0, but they are not identical.
			if (x === 0) { return 1 / x === 1 / y; }
			return true;
		}
		return $isNaN(x) && $isNaN(y);
	},

	// http://www.ecma-international.org/ecma-262/5.1/#sec-8
	Type: function Type(x) {
		if (x === null) {
			return 'Null';
		}
		if (typeof x === 'undefined') {
			return 'Undefined';
		}
		if (typeof x === 'function' || typeof x === 'object') {
			return 'Object';
		}
		if (typeof x === 'number') {
			return 'Number';
		}
		if (typeof x === 'boolean') {
			return 'Boolean';
		}
		if (typeof x === 'string') {
			return 'String';
		}
	}
};

module.exports = ES5;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

var isPrimitive = __webpack_require__(13);

var isCallable = __webpack_require__(1);

// https://es5.github.io/#x8.12
var ES5internalSlots = {
	'[[DefaultValue]]': function (O, hint) {
		var actualHint = hint || (toStr.call(O) === '[object Date]' ? String : Number);

		if (actualHint === String || actualHint === Number) {
			var methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
			var value, i;
			for (i = 0; i < methods.length; ++i) {
				if (isCallable(O[methods[i]])) {
					value = O[methods[i]]();
					if (isPrimitive(value)) {
						return value;
					}
				}
			}
			throw new TypeError('No default value');
		}
		throw new TypeError('invalid [[DefaultValue]] hint supplied');
	}
};

// https://es5.github.io/#x9
module.exports = function ToPrimitive(input, PreferredType) {
	if (isPrimitive(input)) {
		return input;
	}
	return ES5internalSlots['[[DefaultValue]]'](input, PreferredType);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(14);
var regexExec = RegExp.prototype.exec;
var gOPD = Object.getOwnPropertyDescriptor;

var tryRegexExecCall = function tryRegexExec(value) {
	try {
		var lastIndex = value.lastIndex;
		value.lastIndex = 0;

		regexExec.call(value);
		return true;
	} catch (e) {
		return false;
	} finally {
		value.lastIndex = lastIndex;
	}
};
var toStr = Object.prototype.toString;
var regexClass = '[object RegExp]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isRegex(value) {
	if (!value || typeof value !== 'object') {
		return false;
	}
	if (!hasToStringTag) {
		return toStr.call(value) === regexClass;
	}

	var descriptor = gOPD(value, 'lastIndex');
	var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
	if (!hasLastIndexDataProperty) {
		return false;
	}

	return tryRegexExecCall(value);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPolyfill = __webpack_require__(15);
var define = __webpack_require__(6);

module.exports = function shimEntries() {
	var polyfill = getPolyfill();
	define(Object, { entries: polyfill }, {
		entries: function testEntries() {
			return Object.entries !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var config_1 = __webpack_require__(0);
var common_1 = __webpack_require__(3);
/**
 * Calculate the column widths
 */
function calculateWidths(doc, pageWidth) {
    var table = config_1.Config.tableInstance();
    // Column and table content width
    var fixedWidth = 0;
    var autoWidth = 0;
    var dynamicColumns = [];
    table.columns.forEach(function (column) {
        column.contentWidth = 0;
        table.rows.concat(table.headerRow).forEach(function (row) {
            var cell = row.cells[column.dataKey];
            cell.contentWidth = cell.padding('horizontal') + common_1.getStringWidth(cell.text, cell.styles);
            if (cell.contentWidth > column.contentWidth) {
                column.contentWidth = cell.contentWidth;
            }
        });
        table.contentWidth += column.contentWidth;
        if (typeof column.widthStyle === 'number') {
            column.preferredWidth = column.widthStyle;
            fixedWidth += column.preferredWidth;
            column.width = column.preferredWidth;
        }
        else if (column.widthStyle === 'wrap') {
            column.preferredWidth = column.contentWidth;
            fixedWidth += column.preferredWidth;
            column.width = column.preferredWidth;
        }
        else {
            column.preferredWidth = column.contentWidth;
            autoWidth += column.contentWidth;
            dynamicColumns.push(column);
        }
        table.preferredWidth += column.preferredWidth;
    });
    if (typeof table.settings.tableWidth === 'number') {
        table.width = table.settings.tableWidth;
    }
    else if (table.settings.tableWidth === 'wrap') {
        table.width = table.preferredWidth;
    }
    else {
        table.width = pageWidth - table.margin('left') - table.margin('right');
    }
    distributeWidth(dynamicColumns, fixedWidth, autoWidth, 0);
    // Row height, table height and text overflow
    var all = table.rows.concat(table.headerRow);
    all.forEach(function (row) {
        table.columns.forEach(function (col) {
            var cell = row.cells[col.dataKey];
            config_1.Config.applyStyles(cell.styles);
            var textSpace = col.width - cell.padding('horizontal');
            var k = config_1.Config.scaleFactor();
            if (cell.styles.overflow === 'linebreak') {
                // Add one pt to textSpace to fix rounding error
                try {
                    cell.text = doc.splitTextToSize(cell.text, textSpace + 1 / k, { fontSize: cell.styles.fontSize });
                }
                catch (e) {
                    if (e instanceof TypeError && Array.isArray(cell.text)) {
                        cell.text = doc.splitTextToSize(cell.text.join(' '), textSpace + 1 / k, { fontSize: cell.styles.fontSize });
                    }
                    else {
                        throw e;
                    }
                }
            }
            else if (cell.styles.overflow === 'ellipsize') {
                cell.text = common_1.ellipsize(cell.text, textSpace, cell.styles);
            }
            else if (cell.styles.overflow === 'visible') {
                // Do nothing
            }
            else if (cell.styles.overflow === 'hidden') {
                cell.text = common_1.ellipsize(cell.text, textSpace, cell.styles, '');
            }
            else if (typeof cell.styles.overflow === 'function') {
                cell.text = cell.styles.overflow(cell.text, textSpace);
            }
            else {
                console.error("Unrecognized overflow type: " + cell.styles.overflow);
            }
            var lineCount = Array.isArray(cell.text) ? cell.text.length : 1;
            var fontHeight = cell.styles.fontSize / k * config_1.FONT_ROW_RATIO;
            cell.contentHeight = lineCount * fontHeight + cell.padding('vertical');
            if (cell.contentHeight > row.height) {
                row.height = cell.contentHeight;
                row.maxLineCount = lineCount;
            }
        });
        table.height += row.height;
    });
}
exports.calculateWidths = calculateWidths;
function distributeWidth(dynamicColumns, staticWidth, dynamicColumnsContentWidth, fairWidth) {
    var table = config_1.Config.tableInstance();
    var extraWidth = table.width - staticWidth - dynamicColumnsContentWidth;
    for (var i = 0; i < dynamicColumns.length; i++) {
        var col = dynamicColumns[i];
        var ratio = col.contentWidth / dynamicColumnsContentWidth;
        // A column turned out to be none dynamic, start over recursively
        var isNoneDynamic = col.contentWidth + extraWidth * ratio < fairWidth;
        if (extraWidth < 0 && isNoneDynamic) {
            dynamicColumns.splice(i, 1);
            dynamicColumnsContentWidth -= col.contentWidth;
            col.width = fairWidth;
            staticWidth += col.width;
            distributeWidth(dynamicColumns, staticWidth, dynamicColumnsContentWidth, fairWidth);
            break;
        }
        else {
            col.width = col.contentWidth + extraWidth * ratio;
        }
    }
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var models_1 = __webpack_require__(4);
var config_1 = __webpack_require__(0);
var assign = __webpack_require__(5);
function validateInput(headers, data, allOptions) {
    if (!headers || typeof headers !== 'object') {
        console.error("The headers should be an object or array, is: " + typeof headers);
    }
    if (!data || typeof data !== 'object') {
        console.error("The data should be an object or array, is: " + typeof data);
    }
    var _loop_1 = function (settings) {
        if (settings && typeof settings !== 'object') {
            console.error("The options parameter should be of type object, is: " + typeof settings);
        }
        if (typeof settings.extendWidth !== 'undefined') {
            settings.tableWidth = settings.extendWidth ? 'auto' : 'wrap';
            console.error("Use of deprecated option: extendWidth, use tableWidth instead.");
        }
        if (typeof settings.margins !== 'undefined') {
            if (typeof settings.margin === 'undefined')
                settings.margin = settings.margins;
            console.error("Use of deprecated option: margins, use margin instead.");
        }
        if (typeof settings.afterPageContent !== 'undefined' || typeof settings.beforePageContent !== 'undefined' || typeof settings.afterPageAdd !== 'undefined') {
            console.error("The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use addPageContent instead");
            if (typeof settings.addPageContent === 'undefined') {
                settings.addPageContent = function (data) {
                    config_1.Config.applyUserStyles();
                    if (settings.beforePageContent)
                        settings.beforePageContent(data);
                    config_1.Config.applyUserStyles();
                    if (settings.afterPageContent)
                        settings.afterPageContent(data);
                    config_1.Config.applyUserStyles();
                    if (settings.afterPageAdd && data.pageCount > 1) {
                        data.afterPageAdd(data);
                    }
                    config_1.Config.applyUserStyles();
                };
            }
        }
        [['padding', 'cellPadding'], ['lineHeight', 'rowHeight'], 'fontSize', 'overflow'].forEach(function (o) {
            var deprecatedOption = typeof o === 'string' ? o : o[0];
            var style = typeof o === 'string' ? o : o[1];
            if (typeof settings[deprecatedOption] !== 'undefined') {
                if (typeof settings.styles[style] === 'undefined') {
                    settings.styles[style] = settings[deprecatedOption];
                }
                console.error("Use of deprecated option: " + deprecatedOption + ", use the style " + style + " instead.");
            }
        });
        for (var _i = 0, _a = ['styles', 'bodyStyles', 'headerStyles', 'columnStyles']; _i < _a.length; _i++) {
            var styleProp = _a[_i];
            if (settings[styleProp] && typeof settings[styleProp] !== 'object') {
                console.error("The " + styleProp + " style should be of type object, is: " + typeof settings[styleProp]);
            }
            else if (settings[styleProp] && settings[styleProp].rowHeight) {
                console.error("Use of deprecated style: rowHeight, use vertical cell padding instead");
            }
        }
    };
    for (var _i = 0, allOptions_1 = allOptions; _i < allOptions_1.length; _i++) {
        var settings = allOptions_1[_i];
        _loop_1(settings);
    }
}
exports.validateInput = validateInput;
/**
 * Create models from the user input
 *
 * @param inputHeaders
 * @param inputData
 */
function createModels(inputHeaders, inputData) {
    var splitRegex = /\r\n|\r|\n/g;
    var table = config_1.Config.tableInstance();
    var settings = table.settings;
    var theme = config_1.getTheme(settings.theme);
    // Header row and columns
    var headerRow = new models_1.Row(inputHeaders, -1);
    headerRow.index = -1;
    // Columns and header row
    inputHeaders.forEach(function (rawColumn, index) {
        var dataKey = index;
        if (typeof rawColumn.dataKey !== 'undefined') {
            dataKey = rawColumn.dataKey;
        }
        else if (typeof rawColumn.key !== 'undefined') {
            console.error("Deprecation warning: Use dataKey instead of key");
            dataKey = rawColumn.key; // deprecated since 2.x
        }
        var col = new models_1.Column(dataKey, index);
        col.raw = rawColumn;
        col.widthStyle = config_1.Config.styles([theme.table, theme.header, table.styles.styles, table.styles.columnStyles[col.dataKey] || {}]).columnWidth;
        table.columns.push(col);
        var cell = new models_1.Cell(rawColumn);
        cell.styles = config_1.Config.styles([theme.table, theme.header, table.styles.styles, table.styles.headerStyles]);
        if (cell.raw instanceof HTMLElement) {
            cell.text = (cell.raw.innerText || '').trim();
        }
        else {
            var text = typeof cell.raw === 'object' ? cell.raw.title : cell.raw;
            // Stringify 0 and false, but not undefined
            cell.text = typeof cell.raw !== 'undefined' ? '' + text : '';
        }
        cell.text = cell.text.split(splitRegex);
        headerRow.cells[dataKey] = cell;
        for (var _i = 0, _a = table.hooks.createdHeaderCell; _i < _a.length; _i++) {
            var hook = _a[_i];
            hook(cell, { cell: cell, column: col, row: headerRow, settings: settings });
        }
    });
    table.headerRow = headerRow;
    // Rows och cells
    inputData.forEach(function (rawRow, i) {
        var row = new models_1.Row(rawRow, i);
        var rowStyles = i % 2 === 0 ? assign({}, theme.alternateRow, table.styles.alternateRowStyles) : {};
        table.columns.forEach(function (column) {
            var cell = new models_1.Cell(rawRow[column.dataKey]);
            var colStyles = table.styles.columnStyles[column.dataKey] || {};
            cell.styles = config_1.Config.styles([theme.table, theme.body, table.styles.styles, table.styles.bodyStyles, rowStyles, colStyles]);
            if (cell.raw && cell.raw instanceof HTMLElement) {
                cell.text = (cell.raw.innerText || '').trim();
            }
            else {
                // Stringify 0 and false, but not undefined
                cell.text = typeof cell.raw !== 'undefined' ? '' + cell.raw : '';
            }
            cell.text = cell.text.split(splitRegex);
            row.cells[column.dataKey] = cell;
            for (var _i = 0, _a = table.hooks.createdCell; _i < _a.length; _i++) {
                var hook = _a[_i];
                hook(cell, config_1.Config.hooksData({ cell: cell, column: column, row: row }));
            }
        });
        table.rows.push(row);
    });
}
exports.createModels = createModels;


/***/ })
/******/ ]);
});
/*...
	sk.js
*/

/* 
 * Author : Sunil Kashyap
 */

var sk = {
    hcmhidemsg: false,
    skdt_page_size: 10,
    print_font_size: 12,
    appt_book_sidemenu_position: 'min',
    NotesIndex : 0,
    checkDate : 1,
    duplicateqscArr : [],
    duplicatedscArr : [],
    duplicateapptypeArr : [],
    duplicatedscArr: [],
    duplicateqscArr: [],
    skNotify: function (msg, type) {
        $.notifyClose();
        $.notify(msg, {
            element: 'body',
            type: type,
            allow_dismiss: true,
            newest_on_top: true,
            placement: {
                from: "top",
                align: "right"
            },
            delay: 5000,
            z_index: 99999,
            mouse_over: 'pause',
            animate: {
                enter: 'animated bounceIn',
                exit: 'animated bounceOut'
            }, 
            template: `<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">
                            <button type="button" onclick="closeNotify();" aria-hidden="true" class="close" data-notify="dismiss">×</button>
                            <span data-notify="icon"></span>
                            <span data-notify="title">{1}</span>
                            <span data-notify="message">{2}</span>
                            <div class="progress" data-notify="progressbar">
                            <div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
                            </div>
                            <a href="{3}" target="{4}" data-notify="url"></a>
                        </div>`

        });
    },
    skAjaxParam: {
        url: '',
        type: 'POST',
        data: {}
    },
    setClientParam: function (name, value) {

        $.ajax({
            url: '/appointment_book/SaveClientParameters',
            type: 'POST',
            data: {name: name, value: value},
            success: function (e) {
                // console.log(e);
            }
        })
    },
    getClientParam: function (name, handler) {
        // sk.skAjaxParam.url = '/appointment_book/GetClientParameters';
        // sk.skAjaxParam.data = {name: name};
        // sk.skAjax(function (data) {
        //     handler(data);
        // })
    },
    getJsDate: function (date = null) {
        var newDate;
        switch (quickClaim.dateFormat) {
            case 'd/m/Y':
            case 'dd/mm/yy':
                var dateObj = date.split('/');
                newDate = dateObj[1] + '/' + dateObj[0] + '/' + dateObj[2];
                break;
            case 'Y-m-d':
                var dateObj = date.split('-');
                newDate = dateObj[1] + '/' + dateObj[2] + '/' + dateObj[0];
                break;
            default:
                newDate = date;
                break;
        }
        return new Date(newDate + ' EST');
    },
    datepicker: function (input, multi = false) {

        var startDate = '';
        var patient_dob_limit = $("#id_patient_dob_limit").val();
        if(patient_dob_limit != undefined && patient_dob_limit != '')
        {
            if(patient_dob_limit  == 1 && (input == '#patient_dob' || input == '#claim_dob'))
            {
              startDate  = '-141y';       
            }
        }
        $(input).skDP({
            todayBtn: 'linked',
            autoclose: !multi,
            todayHighlight: true,
            clearBtn: true,
            startDate: startDate,
            multidate: multi,
            format: global_js.getNewDateFormat(),
            assumeNearbyYear: true,
            changeMonth: true,  
            zIndexOffset: 999
        });
        $(input).on('change', function () {
           $(input).blur();
        })
        
        // $(input).on("blur",function () {
        //     //alert('blur');
        //     //event.preventDefault();
        //     // check if the date is correct. We can accept dd-mm-yyyy and yyyy-mm-dd.
        //     // update the format if it's yyyy-mm-dd
        //     var date = parseDate($(this).val());
        //     if (! isValidDate(date)) {
        //         //create date based on momentjs (we have that)
        //         date = moment().format(sk.getMomentDateFormat().toUpperCase());
        //     }
        //     //alert(i);
        //     if(date == 'empty')
        //     {
        //         date = '';
        //         sk.skNotify('Invalid date', 'danger');
        //     } 
        //     $(this).val(date);
        //     //sk.checkDate++;
        // });

        // $(input).keyup(function(e) {
        //     if(e.keyCode != 8) {
        //         var lengthcheck = $(this).val().length;
        //         if(lengthcheck >= 8)
        //         {
        //             var date = parseDate($(this).val());
        //             if (! isValidDate(date)) {
        //                 //create date based on momentjs (we have that)
        //                 date = moment().format(sk.getMomentDateFormat().toUpperCase());
        //             }
        //             //alert(i);
        //              if(date == 'Invalid date')
        //             {
        //                 date = '';
        //                 sk.skNotify('Invalid date', 'danger');
        //             }
        //             else
        //             {
        //                  $(this).val(date);
        //             }
        //         }
        //         var isValid = false;
        //         var regex = new RegExp("^[0-9?=.*!@#$%^&/*]+$");
        //         isValid = regex.test($(this).val());
        //         if(isValid == false)
        //         {
        //           sk.skNotify('Invalid date', 'danger');
        //           return false;
        //         }
        //     }
        // });

        // var isValidDate = function(value, format) {
        //         format = format || false;
        //         if (format) {
        //         value = parseDate( $(input));
        //         }
        //         var timestamp = Date.parse(value);
        //         return isNaN(timestamp) == false;
        // }
        // var parseDate = function(value) {
        //         var m = moment(value, sk.getMomentDateFormat().toUpperCase()).format(sk.getMomentDateFormat().toUpperCase());
        //         if (m)
        //         return m;
        // }
    },
    pdf: {
        tblRef: '.DataTableAppointmentSearch',
        fontSize: '12',
        firstCol: true,
        lastCol: false,
        orientation: 'portrait',
        headerDates: '',
        title: '',
        fileName: 'pdf',
        action_col_no: 0,
        result_count: 0,
        alreadySpliced:false,
        init: function (tblName) {
            sk.pdf.tblRef = tblName;
            var doc = new jsPDF(sk.pdf.orientation);
            var columns = sk.pdf.buildHeader();
            var data = sk.pdf.buildRows();

            var page = 1;
            var nId = $('th:contains("Notes")').index() - 1;
            var patintN = $('th:contains("Patient notes")').index() - 1;
            //alert(sk.NotesIndex);
            function footer() {
                //console.log(doc.autoTableState);
                if (sk.pdf.orientation == 'portrait') {
                    doc.text('Page ' + page + ' of ' + Math.ceil(sk.pdf.result_count / (37)), 180, 290);
                } else {
                    doc.text('Page ' + page + ' of ' + Math.ceil(sk.pdf.result_count / (24)), 270, 205);
                }
 
                page++;
            }
            var arr = [];
            arr[nId] = {columnWidth:50};
            arr[patintN] = {columnWidth:50};

            var width = doc.internal.pageSize.getWidth();
            var height = doc.internal.pageSize.getHeight();

            doc.autoTable(columns, data, {
                theme: 'grid',
//                styles: {fillColor: [100, 255, 255]},
                columnStyles: arr,
                margin: {top: (sk.pdf.orientation == 'portrait') ? 18 : 25},
                addPageContent: function (data) {
                    if (sk.pdf.orientation == 'portrait') {
                        doc.addImage(sk_const.logo, 'PNG', 150, 5, 50, 10);
                        doc.setFontSize(10);
                        doc.text(sk.pdf.headerDates, width-11, 5, null, null, 'right');
                        //doc.text(sk.pdf.headerDates, 250, 5);
                        footer();
                        doc.setFontSize(18);
                        doc.text(sk.pdf.title + " (" + sk.pdf.result_count + ")", 10, 15);

                        doc.setFontSize(8);
                        doc.text('Printed on:' + moment().format(sk.getMomentDatetimeFormat()), 5, width+80);
                    } else {
                        doc.addImage(sk_const.logo, 'PNG', 190, 5, 100, 18);
                        doc.setFontSize(12);
                        doc.text(sk.pdf.headerDates, 230, 5);
                        //console.log(doc.text(sk.pdf.headerDates, 250, 5));
                        footer();
                        doc.setFontSize(24);
                        doc.text(sk.pdf.title + " (" + sk.pdf.result_count + ")", 10, 20);
                        doc.setFontSize(8);
                        doc.text('Printed on:' + moment().format(sk.getMomentDatetimeFormat()), 5, 205);
                    }
                }
            })
            sk.pdf.fileName = sk.pdf.fileName.replace(/\''/g, '_').toLowerCase();
            doc.save(sk.pdf.fileName + '.pdf');
        },
        buildHeader: function () {
            var header = [];
            var col = 0;
            $(sk.pdf.tblRef).DataTable().columns().every(function () {
                var column = this;
                if ($(column.header())[0].innerText == 'Appointment actions') {
                    sk.pdf.action_col_no = col;
                    console.log('set action col - '+sk.pdf.action_col_no);
                } else {
                    header.push($(column.header())[0].innerText);
                }
                col++;
            });
            if (sk.pdf.firstCol)
                header.shift()
            if (sk.pdf.lastCol)
                header.splice(-1, 1)
            return header;
        },
        buildRows: function () {
            var rowsData = [];
            var rowsData1 = [];
           
            var actionColoumn = $('#appointment_search_report_columns_appointment_actions').prop('checked');
            var rowsData = [];

            var data =  $(sk.pdf.tblRef).DataTable().rows().data();
            var totalTd = $(sk.pdf.tblRef+' tbody td').length / $(sk.pdf.tblRef+' tbody tr').length;

            data.each(function (tr, row) {
            // $(sk.pdf.tblRef+' tbody tr').each(function(row, tr) {
            var count = totalTd;
            var singleRow = [];
            var statusThIndex = $('th:contains("Appointment actions")').index();
            //console.log($(tr));
            var valI = (actionColoumn == true) ? 1 : 0;
            //alert(valI);    
            for (var i=0;i<count;i++){
                //singleRow.push($(tr).find('td:eq('+i+')').text());
                singleRow.push(tr[i]);
                //console.log('allData',$(tr).find('td:eq('+i+')').text());
                // if(actionColoumn == true)
                // {
                //     if(i != 0 || i != statusThIndex) {
                //     //console.log($(tr).find('td:eq('+i+')'));
                //     singleRow.push($(tr).find('td:eq('+i+')').text());
                //     }
                // }
                // else
                // {
                //     singleRow.push($(tr).find('td:eq('+i+')').text());
                // }
            }
           // alert($(tr).find('td:eq(0)').text().splice(2, 1));
            rowsData.push(singleRow);
        })
        

            var allData = rowsData;
            for (var i in allData) {
                if (Array.isArray(allData[i])) {
                       //if(sk.pdf.alreadySpliced == false){
                       var actionColoumn = $('#appointment_search_report_columns_appointment_actions').prop('checked');
                       if(actionColoumn == true) {
                       allData[i].splice(sk.pdf.action_col_no, 1);
                       }
                       //if (sk.pdf.firstCol)
                       //allData[i].shift()
                       //if (sk.pdf.lastCol)
                       //allData[i].splice(-1, 1);
                       //sk.pdf.alreadySpliced = true;
                       //} 
                     
                    //if(allData[i][0] == '')
                    if(allData[i][0].includes("checkbox"))
                    {
                        rowsData1.push(allData[i].slice(1));
                    }  
                    else
                    {
                         rowsData1.push(allData[i]);
                    }
                }
            }
       
            rowsData1 = rowsData1.filter((res)=> {
                return res.length > 0;
            });
            sk.pdf.result_count = rowsData1.length;
            return rowsData1;
        }
    },
    exportToExcel: function(e, tableId){
        window.open('data:application/vnd.ms-excel,' + encodeURIComponent($('#'+tableId).html()));
        e.preventDefault();
    },
    table: {
        getSortData: function (tableId) {
            var colHeader = [];
            $("#" + tableId + " thead th").each(function () {
                if ($(this).attr('data-sksort')) {
                    switch ($(this).attr('data-sksort')) {
                        case 'date':
                            colHeader.push({sType: 'dateField', bSortable: true});
                            break;
                        case 'time':
                            colHeader.push({sType: 'timeField', bSortable: true});
                            break;
                        case 'datetime':
                            colHeader.push({sType: 'datetimeField', bSortable: true});
                            break;
                    }
                } else {
                    colHeader.push({});
                }
            })
            return colHeader;
        },
        init: function (tableId, mode = 'basic', options = {filterFirst: true, buttons: []}) {
           // $.fn.dataTable.moment('DD/MM/YYYY HH:mm');
            var showButtons = options.buttons.length > 0 ? 'B' : '';
            var aoColumns = this.getSortData(tableId);
            var order = [[0, "asc"]]
            if(tableId == 'patient_appointment_history_table'){ 
                order = [[0, "desc"]];
            }
            if(tableId == 'patient_notes_history_results_table'){
                order = [[1, "desc"]];
            }
            if(tableId == 'pdfReportTable'){
                order = [[1, "desc"]];
            }
            var table = $("#" + tableId).DataTable({
                "paging": true,
                "lengthMenu": [10, 25, 50, 100, 200, 250, 500],
                "lengthChange": true,
                "searching": true,
                "ordering": true,
                "order": order,
                "info": true,
                aoColumns: aoColumns,
                "autoWidth": false,
                "responsive": false,
                "keys": true,
                "dom": 'Bfrtip',
                "oLanguage": {
                    "sSearch": "",
                    "sLengthMenu": "Per page _MENU_",
                    "oPaginate": {
                        "sNext": "<i class='clip-chevron-right'></i>",
                        "sPrevious": "<i class='clip-chevron-left'></i>"
                    },
                    "sInfo": "_START_ to _END_ rows out of _TOTAL_",
                },
                "sDom": '<"wrapper"<"row"<"col-sm-12" <"col-sm-8 actionButtonsDiv' + tableId + '"> <"col-sm-4 printBtnDiv" ' + showButtons + 'l > <"col-sm-12" <"sk-progress" <"sk-blue indeterminate skl' + tableId + '">><"row well customWell" <"col-sm-4 customSearchInput' + tableId + '" f> <"col-sm-1 customSearchField' + tableId + '">  <"col-sm-7 CustomPagination' + tableId + '"ip> > > >  >rt<"clear">>',
                initComplete: function () {

                    $(".CustomPagination" + tableId).prepend('<div style="float:left"><button data-toggle="tooltip" title="Filters" type="button" class="btn btn-primary filterToggle' + tableId + '"><i class="fa fa-filter"></i></button></div>');

                    $("#" + tableId).find(".entireClickable").click(function () {
                        if ($(this).find('input').prop('checked')) {
                            $(this).find('input').prop('checked', false);
                            $(this).removeClass('highlight');
                        } else {
                            $(this).find('input').prop('checked', true);
                            $(this).addClass('highlight');
                        }
                    })

                    var inputHtml = '<div class="input-group">' +
                            '<input type="text" placeholder="Contains..." data-focus="true" class="form-control DatatableAllRounderSearch' + tableId + '" />' +
                            '<span class="input-group-addon cursorPointer btnClearSearchTxt' + tableId + '"> ' +
                            '<i class="clip-cancel-circle-2 "></i>' +
                            '</span>' +
                            '<span class="input-group-addon cursorPointer"> ' +
                            '<i class="clip-search-2"></i>' +
                            '</span>' +
                            '</div>';

                    $(".customSearchInput" + tableId).html(inputHtml);

                    var searchoptions = $("#" + tableId + " thead tr:eq(0) th");
                    var customfilterinputs = '<tr>';
                    for (var j = 0; j < searchoptions.length; j++) {
                        customfilterinputs += '<th></th>';
                    }
                    customfilterinputs += '</tr>';
                    $("#" + tableId + " thead").append(customfilterinputs);
                    var aa = 0;
                    this.api().columns().every(function () {
                        var column = this;
                        var columnText = $.trim($(column.header())[0].innerText);
                        
                        if ($(column.header())[0].cellIndex != 0 || options.filterFirst == true) {

                            if (($.trim($(column.header())[0].innerText) == 'Description' && tableId == 'explCodeTable')) {
                                $('<input type="text" placeholder="Search" class="form-control btn-squared" />')
                                        .appendTo($("#" + tableId + " thead tr:eq(1) th:eq(" + aa + ")"))
                                        .on('keyup change', function () {
                                            if (column.search() !== this.value) {
                                                column
                                                        .search(this.value)
                                                        .draw();
                                            }
                                        });
                            } else {
                                var select = $('<select class="selectRsltTbl' + tableId + ' '+columnText.replace(/\s/g, '')+' "><option value=""></option><option value="">All</option><option value="^$">No '+columnText+'</option></select>')
                                        .appendTo($("#" + tableId + " thead tr:eq(1) th:eq(" + aa + ")"))
                                        .on('change', function () {
                                            var val = $(this).val().trim();

                                            column.search(val, true, false).draw();
                                        });

                                column.data().unique().sort().each(function (d, j) {
                                 
                                    if (columnText == 'Permissions' && tableId == 'user_type_table') {
                                        var arr = d.trim();
                                        arr = arr.split(',');
                                        for (var i in arr) {
                                            select.append('<option value="' + arr[i] + '">' + arr[i] + '</option>');
                                        }
                                    } else {
                                        if(columnText == 'Doctor Profile' && tableId == 'qsc_table')
                                        {     

                                            column.data().unique().sort().each(function (d, j) {
                                                var arr = d.replace(/\<\/li>/g, '_end').replace(/<\/?[^>]+(>|$)/g, "").trim().replace(/(\r\n|\n|\r)/gm, "").replace(/\                    /g, "");
                                                arr = arr.substring(0, arr.length - 4).split('_end');
                //                                var arr = d.replace(/\<li>/g, '').replace(/\<ul>/g, '').replace(/\<\/ul>/g, '').trim();//.split('</li>');
                //                                arr = arr.substring(0, arr.length - 5).split('</li>');
                                                for (var i in arr) {
                                                    if(arr[i] != '') {
                                                       
                                                        if($.inArray(arr[i], sk.duplicateqscArr) != -1) {
                                                             sk.duplicateqscArr.push(arr[i]);
                                                        } else {
                                                            select.append('<option value="' + arr[i] + '">' + arr[i] + '</option>');
                                                            sk.duplicateqscArr.push(arr[i]);
                                                        }
                                                    }
                                                }

                                            });


                                           //select.append('<option value="' + d + '">' + d + '</option>');  
                                           // var ss = d.split(',  ');
                                           // for(i  in ss)  {   
                                           //      if($.inArray(ss[i], sk.duplicateqscArr) != -1) {
                                           //           sk.duplicateqscArr.push(ss[i]);
                                           //      } else {
                                           //          select.append('<option value="' + ss[i] + '">' + ss[i] + '</option>');
                                           //          sk.duplicateqscArr.push(ss[i]);
                                           //      }
                                           // } 
                                        } 
                                        else if(columnText == 'Doctor Profile' && tableId == 'dsc_table')
                                        {     
                                             column.data().unique().sort().each(function (d, j) {
                                                var arr = d.replace(/\<\/li>/g, '_end').replace(/<\/?[^>]+(>|$)/g, "").trim().replace(/(\r\n|\n|\r)/gm, "").replace(/\                    /g, "");
                                                arr = arr.substring(0, arr.length - 4).split('_end');
                //                                var arr = d.replace(/\<li>/g, '').replace(/\<ul>/g, '').replace(/\<\/ul>/g, '').trim();//.split('</li>');
                //                                arr = arr.substring(0, arr.length - 5).split('</li>');
                                                for (var i in arr) {
                                                    if(arr[i] != '') {

                                                        if($.inArray(arr[i], sk.duplicatedscArr) != -1) {
                                                             sk.duplicatedscArr.push(arr[i]);
                                                        } else {
                                                            select.append('<option value="' + arr[i] + '">' + arr[i] + '</option>');
                                                            sk.duplicatedscArr.push(arr[i]);
                                                        }

                                                        //select.append('<option value="' + arr[i] + '">' + arr[i] + '</option>');
                                                    }
                                                }

                                            });



                                           // var ss = d.split(',  ');
                                           // for(i  in ss)  {   
                                           //      if($.inArray(ss[i], sk.duplicatedscArr) != -1) {
                                           //           sk.duplicatedscArr.push(ss[i]);
                                           //      } else {
                                           //          select.append('<option value="' + ss[i] + '">' + ss[i] + '</option>');
                                           //          sk.duplicatedscArr.push(ss[i]);
                                           //      }
                                           // } 
                                        } 
                                        else if(columnText == 'Doctor Profile' && tableId == 'appointment_type_table')
                                        {       
                                           var ss = d.split(',  ');
                                           for(i  in ss)  {   
                                                if($.inArray(ss[i], sk.duplicateapptypeArr) != -1) {
                                                     sk.duplicateapptypeArr.push(ss[i]);
                                                } else {
                                                    select.append('<option value="' + ss[i] + '">' + ss[i] + '</option>');
                                                    sk.duplicateapptypeArr.push(ss[i]);
                                                }
                                           } 
                                        } else {
                                             if(d != '') {
                                             select.append('<option value="' + d + '">' + d + '</option>');
                                             }
                                        }
                                        //select.append('<option value="' + d + '">' + d + '</option>');
                                    }

                                });
                            }
                        }
                        aa++;
                    });


                    $(".filterToggle" + tableId).click(function () {
                        $("#" + tableId + " thead tr:eq(1)").toggle();
                    });
                    $(".selectRsltTbl" + tableId).select2({
                        placeholder: "Search",
                        allowClear: true,
                        selectOnClose: true,
                        dropdownAutoWidth: true,
                        width: '98%'
                    });
                    $(".custActionBtns" + tableId).detach().appendTo(".actionButtonsDiv" + tableId);
                    $(".actionButtonsDiv" + tableId).attr('style', 'padding-left:0px');
                }
            });

            $(".DatatableAllRounderSearch" + tableId).keyup(function () {
                table.search($(this).val(), true).draw();
            });

            $(".btnClearSearchTxt" + tableId).click(function () {
                $(".DatatableAllRounderSearch" + tableId).val('');
                table.search('', true).draw();
            });
            setTimeout(function () {
                $(".dataTables_length select").select2('destroy');
                $("#" + tableId).find('.select2-arrow').hide();
                $("#" + tableId + " thead tr:eq(1)").toggle();
            }, 200);
            $("#tabs").on("tabsactivate", function (event, ui) {
                if ($("#" + tableId + " thead tr:eq(1)").is(":visible")) {
                    $("#" + tableId + " thead tr:eq(1)").toggle();
                }
            });

            $('div.dataTables_filter input').addClass('form-control');
            $('div.dataTables_filter input').attr('placeholder', 'Search');
            $(".DTsearchlabel").html('<i class="clip-search"></i>');
            $('.dataTables_filter').attr('style', 'width:100%');
            $('.dataTables_filter label').attr('style', 'width:100%');
            $('.dataTables_length select').attr('style', 'font-size: 12px;padding: 5px 3px;background: #fff;');
            $('div.dataTables_filter input').attr('style', 'float:right;width:100%');
            $(".dataTables_wrapper .dataTables_paginate .paginate_button").attr('style', 'background:#fff !important;color:#444444 !important; border-radius: 0;');

            table.on('responsive-display', function (e, datatable, row, showHide, update) {
                $('td ul').attr('style', 'width:100% !important');
                $('td ul').addClass('row');
                $('td ul li').addClass('col-sm-4');
                $(".dropdown-menu li").removeClass('col-sm-4');
            });

            this.initCustomSorting();
        },
        initCustomSorting: function () {
            $.fn.dataTableExt.oSort["dateField-desc"] = function (x, y) {
                var a = moment(x, sk.getMomentDateFormat().toUpperCase());
                var b = moment(y, sk.getMomentDateFormat().toUpperCase());
                return (a.diff(b));
            };

            $.fn.dataTableExt.oSort["dateField-asc"] = function (x, y) {
                var a = moment(x, sk.getMomentDateFormat().toUpperCase());
                var b = moment(y, sk.getMomentDateFormat().toUpperCase());
                return (b.diff(a));
            }

            $.fn.dataTableExt.oSort["datetimeField-desc"] = function (x, y) {
                var a = moment(x, sk.getMomentDatetimeFormat());
                var b = moment(y, sk.getMomentDatetimeFormat());
                return (a.diff(b));
            };

            $.fn.dataTableExt.oSort["datetimeField-asc"] = function (x, y) {
                var a = moment(x, sk.getMomentDatetimeFormat());
                var b = moment(y, sk.getMomentDatetimeFormat());
                return (b.diff(a));
            }
        },
        loader: function (tblid, status = 'stop') {
            if (status == 'start') {
                $(".skl" + tblid).addClass('indeterminate').removeClass('sk-progressfull');
            } else if (status == 'stop') {
                $(".skl" + tblid).addClass('sk-progressfull').removeClass('indeterminate');
        }
        }
    },
    getMomentDateFormat: function () {
        var newFormat = quickClaim.dateFormat;
        switch (quickClaim.dateFormat) {
            case 'd/m/Y':
                newFormat = 'dd/mm/yyyy';
                break;
            case 'dd/mm/yy':
                newFormat = 'dd/mm/yy';
                break;
            case 'm/d/Y':
                newFormat = 'mm/dd/yyyy';
                break;
            case 'Y-m-d':
                newFormat = 'yyyy-mm-dd';
                break;
        }
        return newFormat;
    },
    getMomentDatetimeFormat: function () {
        var newFormat = quickClaim.dateFormat;
        var time = quickClaim.timeFormat.replace('a', 'A').replace('ii', 'mm');
        switch (quickClaim.dateFormat) {
            case 'd/m/Y':
                newFormat = 'DD/MM/YYYY';
                break;
            case 'dd/mm/yy':
                newFormat = 'DD/MM/YY';
                break;
            case 'm/d/Y':
                newFormat = 'MM/DD/YYYY';
                break;
            case 'Y-m-d':
                newFormat = 'YYYY-MM-DD';
                break;
        }
        return newFormat + ' ' + time;
    },
    initRadioTabbled: function () {
        $.fn.radioTabbable = function () {
            var groups = [];

            $(this).each(function () {
                var el = this;
                var thisGroup = groups[el.name] = (groups[el.name] || []);
                thisGroup.push(el);
            });

            $(this).on('keydown', function (e) {
                setTimeout(function () {
                    var el = e.target;
                    var thisGroup = groups[el.name] = (groups[el.name] || []);
                    var indexOfTarget = thisGroup.indexOf(e.target);

                    if (e.keyCode === 9) {
                        if (indexOfTarget < (thisGroup.length - 1) && !(e.shiftKey)) {
                            thisGroup[indexOfTarget + 1].focus();
                        } else if (indexOfTarget > 0 && e.shiftKey) {
                            thisGroup[indexOfTarget - 1].focus();
                        }
                    }
                });
            });
        };
    },
    skAjax: function (handleData) {
        $.ajax({
            url: sk.skAjaxParam.url,
            type: sk.skAjaxParam.type,
            data: sk.skAjaxParam.data,
            success: function (e) {
                handleData(e);
            }
        });
    },
    skOloader: function (handleData) {
        if ($("#spinner").is(':visible')) {
            setTimeout(function () {
                sk.skOloader(handleData)
            }, 200);
        } else {
            handleData(true);
        }
    },
    initBreadcrumsCopy: function () {
        setTimeout(function () {
            $(".SkBreadCrumCopy").click(function () {
                var len = $(".breadcrumbul li").length;
                len--;
                len--;
                var i = 1;
                var cpyData = '';
                $(".breadcrumbul li").each(function () {
                    var text = $(this).text().trim();
                    cpyData += text;
                    if (len >= i) {
                        cpyData += ' \\ ';
                    }
                    i++;
                })
                new ClipboardJS('#copyTriggerBtnBreadcrum');
                $("#copyTextareaBreadCrum").val(cpyData);
                $("#copyTriggerBtnBreadcrum").trigger('click');
                alertify.set('notifier', 'position', 'top-right');
                msg = alertify.success("Breadcrumbs trail copied successfully!", 5);
            })
        }, 500);
    },
    MainMenu: {
        init: function () {
            setTimeout(function () {
                sk.getClientParam('main_menu_pos', function (res) {
                    sk.MainMenu.mainMenu(res);
                });
                if (sk.currentPage() == 'appointment_book') {
                    sk.getClientParam('appt_side_bar', function (res) {
                        sk.MainMenu.mainMenu(res);
                    });
                }
                sk.MainMenu.initButtons();
            }, 500);

        },
        mainMenu: function (status = 'max') {
            switch (status) {
                case 'max':
                    rightSingle();
                    break;
                case 'min':
                    leftSingle();
                    break;
                case 'maxall':
                    rightAll();
                    break;
                case 'minall':
                    leftAll();
                    break;
                case 'appt_min':
                    apptLeft();
                    break;
                case 'appt_max':
                    apptRight();
                    break;
            }
            function leftAll() {
                $('body').addClass('navigation-small1');
                $('body').addClass('navigation-small');
            }
            function rightAll() {
                $('body').removeClass('navigation-small1');
                $('body').removeClass('navigation-small');
            }
            function leftSingle() {
                $('body').addClass('navigation-small');
            }
            function rightSingle() {
                $('body').removeClass('navigation-small');
            }
            function apptLeft() {
                sk.setClientParam('appt_book_sidemenu_position', 'min');
                $('body').addClass('navigation-small1');
//                $("#new_toggler").hover(
//                        function () {
//                            $('body').removeClass("navigation-small1");
//                            if ($('#collapseTwo').css('height') != '0px') {
//                                $("#locationSrch").focus();
//                            }
//                        }, function () {
//                    $('body').addClass("navigation-small1");
//                })
            }
            function apptRight() {
                sk.setClientParam('appt_book_sidemenu_position', 'max');
                $('body').removeClass('navigation-small1');
                $("#new_toggler").unbind('hover');
        }
        },
        initButtons: function () {
            $('.navigation-toggler').bind('click', function () {
                if (!$('body').hasClass('navigation-small')) {
                    $('body').addClass('navigation-small');
                    sk.setClientParam('main_menu_pos', 'min');
                } else {
                    $('body').removeClass('navigation-small');
                    sk.setClientParam('main_menu_pos', 'max');
                }
            })
        }
    },
    currentPage: function () {
        var currentPage = window.location.href;
        currentPage = currentPage.replace('https://', '').replace('http://', '');
        currentPage = currentPage.split('/');
        currentPage = currentPage[1].split('?');
        return currentPage[0];
    },
    init: function () {
        if (!$.fn.skDP && $.fn.datepicker && $.fn.datepicker.noConflict) {
            var datepicker = $.fn.datepicker.noConflict();
            $.fn.skDP = datepicker;
        }
        this.initRadioTabbled();
        this.initBreadcrumsCopy();
        this.MainMenu.init();
    }
}
sk.init();

/*...
 	a_global_liarary.js
*/
var a_global_liarary = {
	
	initReportColumn: function (selectId,checkboxClass) {

        var options = '';
        var firstOrder = [];
        var ct = 0;
        var oldorder = [];
         
        $("."+checkboxClass).each(function (chkbox) {

            firstOrder[$(this).val()] = $(this).attr('data-position');
            if ($(this).attr('data-position')) {
                ct++;
            }
            oldorder.push({val: $(this).val(), text: $(this).parent().find('label').text(), selected: $(this).is(":checked")});
        })
        

               if(selectId != "select2reports"){
	        $("."+checkboxClass).each(function (chkbox) {
	            $(this).parent("li").parent("ul.checkbox_list").hide();
	        });
	    }

        var neworder = [];
        for (var r = 0; r < oldorder.length; r++) {
            if (firstOrder[oldorder[r].val]) {
                var kk = firstOrder[oldorder[r].val];
            } else {
                var kk = ct;
                ct++;
            }
            neworder[kk] = oldorder[r];
        }
        for (var newod in neworder) {

            if (neworder[newod]['selected']) {
                options += '<option selected value="' + neworder[newod]['val'] + '">' + neworder[newod]['text'] + '</option>';
            } else {
                options += '<option value="' + neworder[newod]['val'] + '">' + neworder[newod]['text'] + '</option>';
            }
        }
        $('#'+selectId).html(options);
    },
    initReportSelect: function (selectId, checkboxId, checkboxClass) {

        setTimeout(function () {
            $('#'+selectId).select2('destroy');
            var printselect = $('#'+selectId).select2Sortable({width: '100%'});

            var opts = $('#'+selectId).val();

            if(selectId == "select2DoctorProfile"){ 
                printselect.on("change", function (e) {
                if(e.val.length > 1){

                    if (e.removed) {
                        $("#"+checkboxId + e.removed.id).trigger('click');
                        $("#"+checkboxId + "all").attr('checked', false);
                    }
                    if (e.added) {
                        if(e.added.id == "all"){ 
                            var skipper = $("#"+checkboxId + "all");
                            $("."+checkboxClass+":checkbox").not(skipper).attr("checked",false);
                            $("#"+checkboxId + e.added.id).trigger('click');

                        }else{
                            $("#"+checkboxId + "all").attr('checked', false);
                            $("#"+checkboxId + e.added.id).trigger('click');

                            //$("#"+checkboxId + e.added.id).attr('checked', true);
                        }
                    } 
                }

                if (e.removed) {
                    $("#"+checkboxId + e.removed.id).attr('checked', false);

                }
                if (e.added) {
                    $("#"+checkboxId + e.added.id).attr('checked', true);
                }
                $('#'+selectId).html('');
                $('#'+selectId).select2('destroy');
                a_global_liarary.initReportColumn(selectId, checkboxClass);
                $('#'+selectId).select2Sortable({width: '100%'});

              });
            }else if(selectId == "select2reports"){
                printselect.on("change", function (e) {

                if (e.removed) {
                    $("#"+checkboxId + e.removed.id).attr('checked', false);
                }
                if (e.added) {
                    $("#"+checkboxId + e.added.id).attr('checked', true);
                }
                $('#'+selectId).html('');
                $('#'+selectId).select2('destroy');
                //            printselect.val(null).trigger('change');
                a_global_liarary.initReportColumn(selectId, checkboxClass);
                $('#'+selectId).select2Sortable({width: '100%'});
                //            printselect.trigger("change");

              });
            }else{
            printselect.on("change", function (e) {
                
                if(e.val.length > 1){

                    if (e.removed) {
                        $("#"+checkboxId + "all").attr('checked', false);
                    }
                    if (e.added) {
                        if(e.added.id == "all"){
                            var skipper = $("#"+checkboxId + "all");
                            $(":checkbox").not(skipper).prop("checked",false);
                        }else
                            $("#"+checkboxId + "all").attr('checked', false);
                    } 
                }

                if (e.removed) {

                    $("#"+checkboxId + e.removed.id).attr('checked', false);
                    $("#"+checkboxId + e.removed.id).trigger('click');
                    $("#"+checkboxId + e.removed.id).attr('checked', false);
                }
                if (e.added) {
                    $("#"+checkboxId + e.added.id).attr('checked', true);
                    $("#"+checkboxId + e.added.id).trigger('click');
                    $("#"+checkboxId + e.added.id).attr('checked', true);
                }

                $('#'+selectId).html('');
                $('#'+selectId).select2('destroy');
                a_global_liarary.initReportColumn(selectId, checkboxClass);
                $('#'+selectId).select2Sortable({width: '100%'});

            });
        }

        }, 1000);
    },
}
/*...
 	shortcuts.js
*/
'use_strict';
//-----------------------------------------------------------------------------------
//      _            _           _      
//   __| |_  ___ _ _| |_ __ _  _| |_ ___
//  (_-< ' \/ _ \ '_|  _/ _| || |  _(_-<
//  /__/_||_\___/_|  \__\__|\_,_|\__/__/
//   Keyboard bindings using Javascript
//
//-----------------------------------------------------------------------------------
// VERSION 1.5
//-----------------------------------------------------------------------------------
//
// Enables keyboard shortcuts to be attached to an event listener
//
//-----------------------------------------------------------------------------------
// Author:   Rick Ellis
// URL:      https://github.com/rickellis/shortcuts
// License:  BSD
//
// For usage examples, see README
//-----------------------------------------------------------------------------------

var shortcuts = new function() {

    this.eventType = 'keydown'
    this.eventTracker = new Array()
    this.shortcutExists = new Array()

    // Lets you add a new shortcut
    this.add = function(shortcut, callback, el) {
        
        // Prevents multiple additions of the same shortcut
        if (this.shortcutExists[shortcut] === true) {
            return
        }
        
        var element = el || document
        var keyTracker = function(e) {

                var event    = e || window.event
                var keypress = (event.keyCode) ? event.keyCode : event.which
                var keyvalue = String.fromCharCode(keypress).toLowerCase()
                var keycodes = {
                                    'backspace'  : 8,
                                    'tab'        : 9,
                                    'return'     : 13,
                                    'esc'        : 27,
                                    'space'      : 32,
                                    'scroll'     : 145,
                                    'capslock'   : 20,
                                    'numlock'    : 144,
                                    'pause'      : 19,
                                    'break'      : 19,
                                    'insert'     : 45,
                                    'home'       : 36,
                                    'delete'     : 127,
                                    'end'        : 35,
                                    'pageup'     : 33,
                                    'pagedown'   : 34,
                                    'left'       : 37,
                                    'up'         : 38,
                                    'right'      : 39,
                                    'down'       : 40,
                                    'f1'         : 112,
                                    'f2'         : 113,
                                    'f3'         : 114,
                                    'f4'         : 115,
                                    'f5'         : 116,
                                    'f6'         : 117,
                                    'f7'         : 118,
                                    'f8'         : 119,
                                    'f9'         : 120,
                                    'f10'        : 121,
                                    'f11'        : 122,
                                    'f12'        : 123
                                 }
                var metaWanted = {
                                    'cmd'        : false,
                                    'ctrl'       : false,
                                    'shift'      : false,
                                    'alt'        : false
                                  }
                var metaPressed = {
                                    'cmd'        : event.metaKey,
                                    'ctrl'       : event.ctrlKey,
                                    'shift'      : event.shiftKey,
                                    'alt'        : event.altKey
                                  }

                var shortcuts = shortcut.split('+')
                var matches = 0
                for (var i = 0; i < shortcuts.length; i++) {

                    if (shortcuts[i] == 'cmd') {
                        metaWanted['cmd'] = true
                        matches++
                    }
                    else if (shortcuts[i] == 'ctrl') {
                        metaWanted['ctrl'] = true
                        matches++
                    }
                    else if (shortcuts[i] == 'shift') {
                        metaWanted['shift'] = true
                        matches++
                    }
                    else if (shortcuts[i] == 'alt') {
                        metaWanted['alt'] = true
                        matches++
                    }
                    else if (shortcuts[i].length > 1)  {
                        if (keycodes[shortcuts[i]] == keypress) {
                            matches++
                        }
                    }
                    else {
                        if (shortcuts[i] === keyvalue) {
                            matches++
                        }
                    }
                }

                // If we have matched the shortcut we issue the callback
                if (matches === shortcuts.length &&
                    metaWanted['cmd']   === metaPressed['cmd'] && 
                    metaWanted['ctrl']  === metaPressed['ctrl'] &&
                    metaWanted['shift'] === metaPressed['shift'] &&
                    metaWanted['alt']   === metaPressed['alt']) {
                    
                    callback()
                }
            }

            // Add the event listener
            element.addEventListener(this.eventType, keyTracker)

            // Cache the event data so it can be removed later
            this.eventTracker[shortcut] = {'element' : element, 'callback' : keyTracker}

            this.shortcutExists[shortcut] = true
    }

    // --------------------------------------------------------------

    // Remove an event listener
    this.remove = function(shortcut) {
        shortcut = shortcut.toLowerCase()

        if (this.eventTracker[shortcut]) {

            var element  = this.eventTracker[shortcut]['element']
            var callback = this.eventTracker[shortcut]['callback']

            element.removeEventListener(this.eventType, callback, false)

            delete(this.eventTracker[shortcut])
            this.shortcutExists[shortcut] = false
        }
    }

// End shortcuts
}()
/*...
 	jquery/timepicker.min.js
*/
!function(a){var b,c,d,e=['<div class="timepicker" style="opacity:0">','<div id="timepicker-time" class="time">','<span id="timepicker-hour" class="hour"></span>',":",'<span id="timepicker-minute" class="minute"></span>',"</div>",'<div id="timepicker-canvas" class="canvas">','<div id="timepicker-faceH" class="faceH"></div>','<div id="timepicker-faceM" class="faceM"></div>',"</div>","</div>"].join(""),f=['<div id="timepicker-buttons" class="buttons">','<span id="timepicker-cancel-button" class="cancel-button"></span>','<span id="timepicker-done-button" class="done-button"></span>',"</div>"].join(""),g=['<div id="am_pm" class="am_pm">','<span id="ampm_button" class="ampm_button"></span>',"</div>"].join(""),h=400,i=3.5,j=2.5,k=function(a){return parseInt(a+Math.random()*a)},l=function(a){return a=a.toString(),a.length<2&&10>a?"0"+a:a},m="ontouchstart"in window,n="mousedown"+(m?" touchstart":""),o="mousemove"+(m?" touchmove":""),p="mouseup"+(m?" touchend":""),q="vibrate"in navigator,r=function(a,b){a=a||50,b=b||150,clearTimeout(d),d=setTimeout(function(){q&&navigator.vibrate(a)},b)},s=function(b,c){var d=this,h=a(e),i=a(g),j="INPUT"===b.prop("tagName"),l=h.find("span#timepicker-hour"),m=h.find("span#timepicker-minute"),n=h.find("#timepicker-canvas"),o=h.find("#timepicker-faceH"),p=h.find("#timepicker-faceM"),q=j?b:b.find("input");parseInt(n.css("width"),10);if(this.id=k(1e3),this.time_h=l,this.time_m=m,this.face_canvas=n,this.face_h=o,this.face_m=p,this.arrow=null,this.meridiem="AM",this.isOpen=!1,this.isCreated=!1,this.isRotated=!1,this.ampm=i,this.currentView="",this.settings=c,this.input=q,this.fragment=h,this.e=b,c.enable_buttons){var r=a(f);r.find("#timepicker-done-button").html(c.done_text).on("click.done_"+this.id,a.proxy(this.done,this)),!c.always_show&&r.find("#timepicker-cancel-button").html(c.cancel_text).on("click.cancel_"+this.id,a.proxy(this.hide,this)),r.appendTo(h)}c.twelve_hour&&(i.appendTo(h.find("#timepicker-time")),i.find("#ampm_button").html(d.meridiem).on("click.ampm_"+this.id,function(){d.meridiem="AM"==d.meridiem?"PM":"AM",a(this).html(d.meridiem)})),"dark"==c.theme&&h.addClass("timepicker-dark"),c.always_show?this.show():q.on("click.timepicker_"+this.id+" focusin.timepicker_"+this.id,a.proxy(this.show,this))};s["default"]={time:"06:00",autohide:!1,autotogle:!0,enable_head:!0,enable_buttons:!0,always_show:!1,twelve_hour:!1,position:"bottom","float":"center",margin:15,theme:"light",done_text:"Done",cancel_text:"Cancel"},s.prototype.show=function(){this.callback(this.settings.beforeShow);var b,c=this,d=[];this.isOpen||("now"==this.settings.time?(b=new Date,d[0]=l(b.getHours()),d[1]=l(b.getMinutes()),this.settings.twelve_hour&&(this.meridiem=d[0]>11?"PM":"AM",d[0]=d[0]>12||0===d[0]?Math.abs(d[0]-12):d[0])):(d=this.input.val()||this.settings.time,/^[0-9]{1,2}:[0-9]{1,2}(?: [A,P]M)?$/.test(d)||(d=this.settings.time),d=d.split(/[\:\ \-]/),("AM"==d[2]||"PM"==d[2])&&(this.meridiem=d[2]),d[0]>24&&(d[0]-=24),d[1]>60&&(d[1]-=60),!this.settings.twelve_hour&&"PM"==this.meridiem&&d[0]<13&&(d[0]=parseInt(d[0])+12),this.settings.twelve_hour&&d[0]>12&&(d[0]=parseInt(d[0]-12),this.meridiem="PM"),d[0]=l(d[0]),d[1]=l(d[1])),this.isCreated||(this.fragment.appendTo("body").addClass("timepicker_"+this.id),this.drawNum(),this.isCreated=!0,this.time_h.on("click.timeH_"+this.id,a.proxy(this.toggleView,this,"hour",!0)),this.time_m.on("click.timeM_"+this.id,a.proxy(this.toggleView,this,"minute",!0)),a(window).on("resize.timepicker_"+this.id,a.proxy(this.position,this))),this.time_h.html(d[0]),this.time_m.html(d[1]),this.ampm.find("#ampm_button").html(this.meridiem),this.toggleView("hour"),this.fragment.css({display:"block"}).animate({opacity:"1"},h),this.position(),this.isOpen=!0,this.settings.always_show||(a(document).on("mousedown.document.timepicker_"+this.id,function(a){c.input.is(a.target)||c.fragment.is(a.target)||0!==c.fragment.has(a.target).length||c.isRotated||c.hide()}),a(document).on("keyup",function(a){27==a.keyCode&&c.hide(),13==a.keyCode&&c.done()})),this.callback(this.settings.afterShow))},s.prototype.hide=function(){var b=this;this.fragment.animate({opacity:"0"},h),setTimeout(function(){b.fragment.css({display:"none"})},h),this.isOpen=!1,a(document).off("mousedown.document.timepicker_"+this.id),this.callback(this.settings.afterHide)},s.prototype.position=function(){var a,b,c=this.input,d=this.settings.position,e=this.settings["float"],f=this.settings.margin,g=c.offset().top,h=c.offset().left,i=c.outerWidth(),j=c.outerHeight(),k=this.fragment.outerHeight(),l=this.fragment.outerWidth();switch(d){case"bottom":a=g+j+f;break;case"top":a=g-k-f;break;case"left":b=h-l-f;break;case"right":b=h+i+f;break;default:a=g+j+f}switch(e){case"bottom":a=g;break;case"top":a=g-k+j;break;case"left":b=h;break;case"right":b=h-l+i;break;case"center":"top"===d||"bottom"===d?b=h+(i-l)/2:a=g+(j-k)/2;break;default:b=h+(i-l)/2}this.fragment.css({top:a,left:b})},s.prototype.drawNum=function(){var d,e,f,g,h,k=this,l=this.face_canvas.width(),m=this.face_canvas.height(),q=l/8,r=m/8;if(this.settings.twelve_hour)for(h=1;13>h;h++)g=j,e=-Math.cos(h*Math.PI/6)*m/g+m/2-r/2,d=Math.sin(h*Math.PI/6)*l/g+l/2-q/2,f=a("<span data="+h+">"+h+"</span>").css({top:e+"px",left:d+"px",width:q+"px","line-height":r+"px"}),this.face_h.append(f);else for(h=0;24>h;h++)g=0===h||h>12?j:i,e=-Math.cos(h*Math.PI/6)*m/g+m/2-r/2,d=Math.sin(h*Math.PI/6)*l/g+l/2-q/2,f=a("<span data="+h+">"+h+"</span>").css({top:e+"px",left:d+"px",width:q+"px","line-height":r+"px"}),(0===h||h>12)&&f.addClass("outerH"),this.face_h.append(f);for(h=0;60>h;h+=5)g=j,e=-Math.cos(h*Math.PI/30)*m/g+m/2-r/2,d=Math.sin(h*Math.PI/30)*l/g+l/2-q/2,f=a("<span data="+h+">"+h+"</span>").css({top:e+"px",left:d+"px",width:q+"px","line-height":r+"px"}),this.face_m.append(f);b=[l/i-q/2,l/i+q/2],c=[l/j-q/2,l/j+q/2],this.arrow=this.face_canvas.children().is(".arrow")?this.face_canvas.find(".arrow"):a('<div class="arrow" style="opacity:0"></div>').appendTo(this.face_canvas),this.face_canvas.on(n+".canvas_"+this.id,function(b){k.moveArrow(b),k.isRotated||a(document).on(o+".document_"+k.id,a.proxy(k.moveArrow,k)),k.isRotated=!0}),a(document).on(p+".document_"+this.id,function(){a(document).off(o+".document_"+k.id),k.isRotated&&k.settings.autotogle&&k.toggleView("auto"),k.isRotated=!1})},s.prototype.moveArrow=function(a){a.preventDefault();var d,e,f,g,h,i,j,k,m,n=/^touch/.test(a.type),o=this.face_canvas,p=o.width(),q=o.height();if(d=o.offset().left+p/2,e=o.offset().top+q/2,f=(n?a.originalEvent.touches[0]:a).pageX-d,g=(n?a.originalEvent.touches[0]:a).pageY-e,i=Math.sqrt(f*f+g*g),i>b[0]&&i<b[1])j="inner";else{if(!(i>c[0]))return;j="outer"}h=180*Math.atan2(g,f)/Math.PI,h=0>h?h+=360:h,h=h>270?h-270:h+90,"hour"!=this.currentView||this.settings.twelve_hour?"hour"==this.currentView&&this.settings.twelve_hour?(k=Math.round(h/30),k=0===k?12:k,this.drawArrow(c[0],"hour12",k),this.time_h.html(l(k))):"minute"==this.currentView&&(m=Math.round(h/6),m=60==m?0:m,this.drawArrow(c[0],"minute",m),this.time_m.html(l(m))):("inner"==j?(k=Math.round(h/30),k=0===k?12:k,this.drawArrow(b[0],"hour",k)):(k=Math.round(h/30)+12,k=24==k||12==k?0:k,this.drawArrow(c[0],"hour",k)),this.time_h.html(l(k))),r(50,150)},s.prototype.drawArrow=function(a,b,c){var d,e=1;"angle"==b&&(e=1),("hour"==b||"hour12"==b)&&(e=30),"minute"==b&&(e=6),d=c*e,a=parseInt(a),this.arrow.css({"margin-top":"-"+a+"px","padding-top":a+"px",transform:"rotate("+d+"deg)"})},s.prototype.done=function(){var a=this.time_h.html()+":"+this.time_m.html();this.input.val(this.settings.twelve_hour?a+" "+this.meridiem:a),this.settings.always_show||this.hide(),this.callback(this.settings.afterDone)},s.prototype.toggleView=function(a,d){this.callback(this.settings.beforeToggleView);var e,f=this,g=parseInt(this.time_h.html()),i=parseInt(this.time_m.html());if(a!=this.currentView){if(d&&r(50,50),"toggle"==a&&this.toggleView("hour"==this.currentView?"minute":"hour"),"auto"==a)return void("hour"==this.currentView?this.toggleView("minute"):"minute"==this.currentView&&this.settings.autohide&&this.done());"hour"==a&&(e=this.settings.twelve_hour?c:g>12?c:b,setTimeout(function(){f.face_m.css({"z-index":1}),f.drawArrow(e,"hour",g),f.arrow.animate({opacity:1},h)},h),this.face_m.animate({transform:"scale(5)",opacity:0},h),this.arrow.animate({opacity:0},h),this.face_h.css({"z-index":10}).animate({transform:"scale(1)",opacity:1},h),this.time_m.removeClass("active"),this.time_h.addClass("active"),this.currentView="hour"),"minute"==a&&(setTimeout(function(){f.face_h.css({"z-index":1}),f.drawArrow(c,"minute",i),f.arrow.animate({opacity:1},h)},h),this.face_h.animate({transform:"scale(5)",opacity:0},h),this.arrow.animate({opacity:0},h),this.face_m.css({"z-index":10}).animate({transform:"scale(1)",opacity:1},h),this.time_h.removeClass("active"),this.time_m.addClass("active"),this.currentView="minute"),this.callback(this.settings.afterToggleView)}},s.prototype.destroy=function(){this.callback(this.settings.beforeDestroy),this.isOpen&&this.hide(),this.input.off("click.timepicker_"+this.id+" focusin.timepicker_"+this.id),a(window).off("resize.timepicker_"+this.id),this.fragment.remove(),this.isCreated&&this.fragment.remove(),this.e.removeData(),this.callback(this.settings.afterDestroy)},s.prototype.callback=function(a){a&&"function"==typeof a&&a()},a.fn.timePicker=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),e=d.data("timepicker");if(e)"function"==typeof e[b]&&e[b].apply(e,c);else{var f=a.extend({},s["default"],d.data(),"object"==typeof b&&b);d.data("timepicker",new s(d,f))}})}}(jQuery);

/*...
 	/clipone/js/mousetrap.js
*/
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* mousetrap v1.6.1 craig.is/killing/mice */
(function(r,v,f){function w(a,b,g){a.addEventListener?a.addEventListener(b,g,!1):a.attachEvent("on"+b,g)}function A(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return b}return p[a.which]?p[a.which]:t[a.which]?t[a.which]:String.fromCharCode(a.which).toLowerCase()}function F(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function x(a){return"shift"==a||"ctrl"==a||"alt"==a||
"meta"==a}function B(a,b){var g,c,d,f=[];g=a;"+"===g?g=["+"]:(g=g.replace(/\+{2}/g,"+plus"),g=g.split("+"));for(d=0;d<g.length;++d)c=g[d],C[c]&&(c=C[c]),b&&"keypress"!=b&&D[c]&&(c=D[c],f.push("shift")),x(c)&&f.push(c);g=c;d=b;if(!d){if(!n){n={};for(var q in p)95<q&&112>q||p.hasOwnProperty(q)&&(n[p[q]]=q)}d=n[g]?"keydown":"keypress"}"keypress"==d&&f.length&&(d="keydown");return{key:c,modifiers:f,action:d}}function E(a,b){return null===a||a===v?!1:a===b?!0:E(a.parentNode,b)}function c(a){function b(a){a=
a||{};var b=!1,l;for(l in n)a[l]?b=!0:n[l]=0;b||(y=!1)}function g(a,b,u,e,c,g){var l,m,k=[],f=u.type;if(!h._callbacks[a])return[];"keyup"==f&&x(a)&&(b=[a]);for(l=0;l<h._callbacks[a].length;++l)if(m=h._callbacks[a][l],(e||!m.seq||n[m.seq]==m.level)&&f==m.action){var d;(d="keypress"==f&&!u.metaKey&&!u.ctrlKey)||(d=m.modifiers,d=b.sort().join(",")===d.sort().join(","));d&&(d=e&&m.seq==e&&m.level==g,(!e&&m.combo==c||d)&&h._callbacks[a].splice(l,1),k.push(m))}return k}function f(a,b,c,e){h.stopCallback(b,
b.target||b.srcElement,c,e)||!1!==a(b,c)||(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation?b.stopPropagation():b.cancelBubble=!0)}function d(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=A(a);b&&("keyup"==a.type&&z===b?z=!1:h.handleKey(b,F(a),a))}function p(a,c,u,e){function l(c){return function(){y=c;++n[a];clearTimeout(r);r=setTimeout(b,1E3)}}function g(c){f(u,c,a);"keyup"!==e&&(z=A(c));setTimeout(b,10)}for(var d=n[a]=0;d<c.length;++d){var m=d+1===c.length?g:l(e||
B(c[d+1]).action);q(c[d],m,e,a,d)}}function q(a,b,c,e,d){h._directMap[a+":"+c]=b;a=a.replace(/\s+/g," ");var f=a.split(" ");1<f.length?p(a,f,b,c):(c=B(a,c),h._callbacks[c.key]=h._callbacks[c.key]||[],g(c.key,c.modifiers,{type:c.action},e,a,d),h._callbacks[c.key][e?"unshift":"push"]({callback:b,modifiers:c.modifiers,action:c.action,seq:e,level:d,combo:a}))}var h=this;a=a||v;if(!(h instanceof c))return new c(a);h.target=a;h._callbacks={};h._directMap={};var n={},r,z=!1,t=!1,y=!1;h._handleKey=function(a,
c,d){var e=g(a,c,d),k;c={};var h=0,l=!1;for(k=0;k<e.length;++k)e[k].seq&&(h=Math.max(h,e[k].level));for(k=0;k<e.length;++k)e[k].seq?e[k].level==h&&(l=!0,c[e[k].seq]=1,f(e[k].callback,d,e[k].combo,e[k].seq)):l||f(e[k].callback,d,e[k].combo);e="keypress"==d.type&&t;d.type!=y||x(a)||e||b(c);t=l&&"keydown"==d.type};h._bindMultiple=function(a,b,c){for(var d=0;d<a.length;++d)q(a[d],b,c)};w(a,"keypress",d);w(a,"keydown",d);w(a,"keyup",d)}if(r){var p={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",
18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},t={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},D={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},C={option:"alt",command:"meta","return":"enter",
escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},n;for(f=1;20>f;++f)p[111+f]="f"+f;for(f=0;9>=f;++f)p[f+96]=f.toString();c.prototype.bind=function(a,b,c){a=a instanceof Array?a:[a];this._bindMultiple.call(this,a,b,c);return this};c.prototype.unbind=function(a,b){return this.bind.call(this,a,function(){},b)};c.prototype.trigger=function(a,b){if(this._directMap[a+":"+b])this._directMap[a+":"+b]({},a);return this};c.prototype.reset=function(){this._callbacks={};
this._directMap={};return this};c.prototype.stopCallback=function(a,b){return-1<(" "+b.className+" ").indexOf(" mousetrap ")||E(b,this.target)?!1:"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable};c.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)};c.addKeycodes=function(a){for(var b in a)a.hasOwnProperty(b)&&(p[b]=a[b]);n=null};c.init=function(){var a=c(v),b;for(b in a)"_"!==b.charAt(0)&&(c[b]=function(b){return function(){return a[b].apply(a,
arguments)}}(b))};c.init();r.Mousetrap=c;"undefined"!==typeof module&&module.exports&&(module.exports=c);"function"===typeof define&&define.amd&&define(function(){return c})}})("undefined"!==typeof window?window:null,"undefined"!==typeof window?document:null);

/*...
 	keyboardHandling.js
*/
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var keyHandling = {
    form:{
        name:'other',
        elements:0,
        currentElement:1,
        tabIndex:0,
        formId:''
    },
    tabs:{
        CurrentTab: 0,
        total:0
    },
    PatientSearch: function(){
        var form = document.querySelector('form');
        keyHandling.form.formId = $(form).attr('id');
        keyHandling.form.elements = $(form).find('input[type=text],[type=radio],[type=select]').length - 2;
        keyHandling.form.name = 'patient';
        Mousetrap(form).bind('tab', keyHandling._handleTab);
    },
    handleTabSwitching:function(){
        keyHandling.tabs.CurrentTab = $( "#tabs" ).tabs( "option", "active" );
        keyHandling.tabs.total = $('#tabs >ul >li[disabled!=true]').size() - 1;
        
        Mousetrap.bind(['command+up', 'ctrl+up', 'command+down', 'ctrl+down'], function(e) {
            if(e.keyCode == 38){
                //right
                if(keyHandling.tabs.CurrentTab >= keyHandling.tabs.total){
                    keyHandling.tabs.CurrentTab = 0;
                }else{
                    keyHandling.tabs.CurrentTab++;
                }
                $('#tabs').tabs('option', 'active', keyHandling.tabs.CurrentTab);
            }else if(e.keyCode == 40){
                //left
                if(keyHandling.tabs.CurrentTab >= keyHandling.tabs.total){
                    keyHandling.tabs.CurrentTab = keyHandling.tabs.total;
                }else{
                    keyHandling.tabs.CurrentTab--;
                }
                $('#tabs').tabs('option', 'active', keyHandling.tabs.CurrentTab);
            }
            return false;
        });
        
    },
    handleEscBtn:function(){
        var form = document.querySelector('form');
    },
    _handleTab: function(evt, input){
        console.log($(evt.path[0]).attr('tabindex'));
        console.log(input);
        return true;
        
        if(keyHandling.form.name == 'patient'){
            
            var lastIndex = keyHandling.form.tabIndex;//$(evt.srcElement).attr('data-tabIndex');
            var newIndex = +lastIndex + 1;
            if(newIndex == 5){
                $("#patient_search_dob").skDP('hide')
            };
            if(lastIndex >= 7){
                keyHandling.form.tabIndex = 0;
                $(form).find('[data-tabIndex="'+keyHandling.form.tabIndex+'"]').focus();
            }else{
                keyHandling.form.tabIndex = newIndex;
                var form = document.querySelector('form');
                console.log(newIndex);
                $(form).find('[data-tabIndex="'+newIndex+'"]').focus();
            }            
        } else {
            if(keyHandling.form.currentElement == keyHandling.form.elements){
                quickClaim.focusTopField();
                keyHandling.form.currentElement = 1;
            }else{
                keyHandling.form.currentElement++;
            }
        }        
    },
    _focusFirstField: function(){
        $("#"+keyHandling.form.formId+" input[type!=hidden]:first").focus();
    }
};
/*...
 	jquery.hotkey.js
*/
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*jslint browser: true*/
/*jslint jquery: true*/

/*
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * https://github.com/tzuryby/jquery.hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
 */

/*
 * One small change is: now keys are passed by object { keys: '...' }
 * Might be useful, when you want to pass some other data to your handler
 */

(function(jQuery) {

  jQuery.hotkeys = {
    version: "0.2.0",

    specialKeys: {
      8: "backspace",
      9: "tab",
      10: "return",
      13: "return",
      16: "shift",
      17: "ctrl",
      18: "alt",
      19: "pause",
      20: "capslock",
      27: "esc",
      32: "space",
      33: "pageup",
      34: "pagedown",
      35: "end",
      36: "home",
      37: "left",
      38: "up",
      39: "right",
      40: "down",
      45: "insert",
      46: "del",
      59: ";",
      61: "=",
      96: "0",
      97: "1",
      98: "2",
      99: "3",
      100: "4",
      101: "5",
      102: "6",
      103: "7",
      104: "8",
      105: "9",
      106: "*",
      107: "+",
      109: "-",
      110: ".",
      111: "/",
      112: "f1",
      113: "f2",
      114: "f3",
      115: "f4",
      116: "f5",
      117: "f6",
      118: "f7",
      119: "f8",
      120: "f9",
      121: "f10",
      122: "f11",
      123: "f12",
      144: "numlock",
      145: "scroll",
      173: "-",
      186: ";",
      187: "=",
      188: ",",
      189: "-",
      190: ".",
      191: "/",
      192: "`",
      219: "[",
      220: "\\",
      221: "]",
      222: "'"
    },

    shiftNums: {
      "`": "~",
      "1": "!",
      "2": "@",
      "3": "#",
      "4": "$",
      "5": "%",
      "6": "^",
      "7": "&",
      "8": "*",
      "9": "(",
      "0": ")",
      "-": "_",
      "=": "+",
      ";": ": ",
      "'": "\"",
      ",": "<",
      ".": ">",
      "/": "?",
      "\\": "|"
    },

    // excludes: button, checkbox, file, hidden, image, password, radio, reset, search, submit, url
    textAcceptingInputTypes: [
      "text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime",
      "datetime-local", "search", "color", "tel"],

    // default input types not to bind to unless bound directly
    textInputTypes: /textarea|input|select/i,

    options: {
      filterInputAcceptingElements: true,
      filterTextInputs: true,
      filterContentEditable: true
    }
  };

  function keyHandler(handleObj) {
    if (typeof handleObj.data === "string") {
      handleObj.data = {
        keys: handleObj.data
      };
    }

    // Only care when a possible input has been specified
    if (!handleObj.data || !handleObj.data.keys || typeof handleObj.data.keys !== "string") {
      return;
    }

    var origHandler = handleObj.handler,
      keys = handleObj.data.keys.toLowerCase().split(" ");

    handleObj.handler = function(event) {
      //      Don't fire in text-accepting inputs that we didn't directly bind to
      if (this !== event.target &&
        (jQuery.hotkeys.options.filterInputAcceptingElements &&
          jQuery.hotkeys.textInputTypes.test(event.target.nodeName) ||
          (jQuery.hotkeys.options.filterContentEditable && jQuery(event.target).attr('contenteditable')) ||
          (jQuery.hotkeys.options.filterTextInputs &&
            jQuery.inArray(event.target.type, jQuery.hotkeys.textAcceptingInputTypes) > -1))) {
        return;
      }

      var special = event.type !== "keypress" && jQuery.hotkeys.specialKeys[event.which],
        character = String.fromCharCode(event.which).toLowerCase(),
        modif = "",
        possible = {};

      jQuery.each(["alt", "ctrl", "shift"], function(index, specialKey) {

        if (event[specialKey + 'Key'] && special !== specialKey) {
          modif += specialKey + '+';
        }
      });

      // metaKey is triggered off ctrlKey erronously
      if (event.metaKey && !event.ctrlKey && special !== "meta") {
        modif += "meta+";
      }

      if (event.metaKey && special !== "meta" && modif.indexOf("alt+ctrl+shift+") > -1) {
        modif = modif.replace("alt+ctrl+shift+", "hyper+");
      }

      if (special) {
        possible[modif + special] = true;
      }
      else {
        possible[modif + character] = true;
        possible[modif + jQuery.hotkeys.shiftNums[character]] = true;

        // "$" can be triggered as "Shift+4" or "Shift+$" or just "$"
        if (modif === "shift+") {
          possible[jQuery.hotkeys.shiftNums[character]] = true;
        }
      }

      for (var i = 0, l = keys.length; i < l; i++) {
        if (possible[keys[i]]) {
          return origHandler.apply(this, arguments);
        }
      }
    };
  }

  jQuery.each(["keydown", "keyup", "keypress"], function() {
    jQuery.event.special[this] = {
      add: keyHandler
    };
  });

})(jQuery || this.jQuery || window.jQuery);

/*...
 	/js/datatables/select/1.1.2/js/dataTables.select.min.js
*/
/*!
 Select for DataTables 1.1.2
 2015-2016 SpryMedia Ltd - datatables.net/license/mit
*/
(function(e){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(j){return e(j,window,document)}):"object"===typeof exports?module.exports=function(j,l){j||(j=window);if(!l||!l.fn.dataTable)l=require("datatables.net")(j,l).$;return e(l,j,j.document)}:e(jQuery,window,document)})(function(e,j,l,i){function s(a){var b=a.settings()[0]._select.selector;e(a.table().body()).off("mousedown.dtSelect",b).off("mouseup.dtSelect",b).off("click.dtSelect",b);e("body").off("click.dtSelect")}
function u(a){var b=e(a.table().body()),c=a.settings()[0],d=c._select.selector;b.on("mousedown.dtSelect",d,function(c){if(c.shiftKey)b.css("-moz-user-select","none").one("selectstart.dtSelect",d,function(){return!1})}).on("mouseup.dtSelect",d,function(){b.css("-moz-user-select","")}).on("click.dtSelect",d,function(c){var b=a.select.items();if(!j.getSelection||!j.getSelection().toString()){var d=a.settings()[0];if(e(c.target).closest("div.dataTables_wrapper")[0]==a.table().container()){var m=e(c.target).closest("td, th"),
h=a.cell(m).index();a.cell(m).any()&&("row"===b?(b=h.row,t(c,a,d,"row",b)):"column"===b?(b=a.cell(m).index().column,t(c,a,d,"column",b)):"cell"===b&&(b=a.cell(m).index(),t(c,a,d,"cell",b)),d._select_lastCell=h)}}});e("body").on("click.dtSelect",function(b){c._select.blurable&&!e(b.target).parents().filter(a.table().container()).length&&(e(b.target).parents("div.DTE").length||q(c,!0))})}function k(a,b,c,d){if(!d||a.flatten().length)c.unshift(a),e(a.table().node()).triggerHandler(b+".dt",c)}function v(a){var b=
a.settings()[0];if(b._select.info&&b.aanFeatures.i){var c=e('<span class="select-info"/>'),d=function(b,d){c.append(e('<span class="select-item"/>').append(a.i18n("select."+b+"s",{_:"%d "+b+"s selected","0":"",1:"1 "+b+" selected"},d)))};d("row",a.rows({selected:!0}).flatten().length);d("column",a.columns({selected:!0}).flatten().length);d("cell",a.cells({selected:!0}).flatten().length);e.each(b.aanFeatures.i,function(b,a){var a=e(a),d=a.children("span.select-info");d.length&&d.remove();""!==c.text()&&
a.append(c)})}}function q(a,b){if(b||"single"===a._select.style){var c=new h.Api(a);c.rows({selected:!0}).deselect();c.columns({selected:!0}).deselect();c.cells({selected:!0}).deselect()}}function t(a,b,c,d,f){var n=b.select.style(),g=b[d](f,{selected:!0}).any();"os"===n?a.ctrlKey||a.metaKey?b[d](f).select(!g):a.shiftKey?"cell"===d?(d=c._select_lastCell||null,g=function(c,a){if(c>a)var d=a,a=c,c=d;var f=!1;return b.columns(":visible").indexes().filter(function(b){b===c&&(f=!0);return b===a?(f=!1,
!0):f})},a=function(c,a){var d=b.rows({search:"applied"}).indexes();if(d.indexOf(c)>d.indexOf(a))var f=a,a=c,c=f;var g=!1;return d.filter(function(b){b===c&&(g=!0);return b===a?(g=!1,!0):g})},!b.cells({selected:!0}).any()&&!d?(g=g(0,f.column),d=a(0,f.row)):(g=g(d.column,f.column),d=a(d.row,f.row)),d=b.cells(d,g).flatten(),b.cells(f,{selected:!0}).any()?b.cells(d).deselect():b.cells(d).select()):(a=c._select_lastCell?c._select_lastCell[d]:null,g=b[d+"s"]({search:"applied"}).indexes(),a=e.inArray(a,
g),c=e.inArray(f,g),!b[d+"s"]({selected:!0}).any()&&-1===a?g.splice(e.inArray(f,g)+1,g.length):(a>c&&(n=c,c=a,a=n),g.splice(c+1,g.length),g.splice(0,a)),b[d](f,{selected:!0}).any())?(g.splice(e.inArray(f,g),1),b[d+"s"](g).deselect()):b[d+"s"](g).select():(a=b[d+"s"]({selected:!0}),g&&1===a.flatten().length?b[d](f).deselect():(a.deselect(),b[d](f).select())):b[d](f).select(!g)}function r(a,b){return function(c){return c.i18n("buttons."+a,b)}}var h=e.fn.dataTable;h.select={};h.select.version="1.1.2";
h.select.init=function(a){var b=a.settings()[0],c=b.oInit.select,d=h.defaults.select,c=c===i?d:c,d="row",f="api",n=!1,g=!0,m="td, th",j="selected";b._select={};if(!0===c)f="os";else if("string"===typeof c)f=c;else if(e.isPlainObject(c)&&(c.blurable!==i&&(n=c.blurable),c.info!==i&&(g=c.info),c.items!==i&&(d=c.items),c.style!==i&&(f=c.style),c.selector!==i&&(m=c.selector),c.className!==i))j=c.className;a.select.selector(m);a.select.items(d);a.select.style(f);a.select.blurable(n);a.select.info(g);b._select.className=
j;e.fn.dataTable.ext.order["select-checkbox"]=function(b,c){return this.api().column(c,{order:"index"}).nodes().map(function(c){return"row"===b._select.items?e(c).parent().hasClass(b._select.className):"cell"===b._select.items?e(c).hasClass(b._select.className):!1})};e(a.table().node()).hasClass("selectable")&&a.select.style("os")};e.each([{type:"row",prop:"aoData"},{type:"column",prop:"aoColumns"}],function(a,b){h.ext.selector[b.type].push(function(c,a,f){var a=a.selected,e,g=[];if(a===i)return f;
for(var h=0,j=f.length;h<j;h++)e=c[b.prop][f[h]],(!0===a&&!0===e._select_selected||!1===a&&!e._select_selected)&&g.push(f[h]);return g})});h.ext.selector.cell.push(function(a,b,c){var b=b.selected,d,f=[];if(b===i)return c;for(var e=0,g=c.length;e<g;e++)d=a.aoData[c[e].row],(!0===b&&d._selected_cells&&!0===d._selected_cells[c[e].column]||!1===b&&(!d._selected_cells||!d._selected_cells[c[e].column]))&&f.push(c[e]);return f});var o=h.Api.register,p=h.Api.registerPlural;o("select()",function(){return this.iterator("table",
function(a){h.select.init(new h.Api(a))})});o("select.blurable()",function(a){return a===i?this.context[0]._select.blurable:this.iterator("table",function(b){b._select.blurable=a})});o("select.info()",function(a){return v===i?this.context[0]._select.info:this.iterator("table",function(b){b._select.info=a})});o("select.items()",function(a){return a===i?this.context[0]._select.items:this.iterator("table",function(b){b._select.items=a;k(new h.Api(b),"selectItems",[a])})});o("select.style()",function(a){return a===
i?this.context[0]._select.style:this.iterator("table",function(b){b._select.style=a;if(!b._select_init){var c=new h.Api(b);b.aoRowCreatedCallback.push({fn:function(c,a,d){a=b.aoData[d];a._select_selected&&e(c).addClass(b._select.className);c=0;for(d=b.aoColumns.length;c<d;c++)(b.aoColumns[c]._select_selected||a._selected_cells&&a._selected_cells[c])&&e(a.anCells[c]).addClass(b._select.className)},sName:"select-deferRender"});c.on("preXhr.dt.dtSelect",function(){var b=c.rows({selected:!0}).ids(!0).filter(function(b){return b!==
i}),a=c.cells({selected:!0}).eq(0).map(function(b){var a=c.row(b.row).id(!0);return a?{row:a,column:b.column}:i}).filter(function(b){return b!==i});c.one("draw.dt.dtSelect",function(){c.rows(b).select();a.any()&&a.each(function(b){c.cells(b.row,b.column).select()})})});c.on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt",function(){v(c)});c.on("destroy.dtSelect",function(){s(c);c.off(".dtSelect")})}var d=new h.Api(b);s(d);"api"!==a&&u(d);k(new h.Api(b),"selectStyle",[a])})});o("select.selector()",
function(a){return a===i?this.context[0]._select.selector:this.iterator("table",function(b){s(new h.Api(b));b._select.selector=a;"api"!==b._select.style&&u(new h.Api(b))})});p("rows().select()","row().select()",function(a){var b=this;if(!1===a)return this.deselect();this.iterator("row",function(b,a){q(b);b.aoData[a]._select_selected=!0;e(b.aoData[a].nTr).addClass(b._select.className)});this.iterator("table",function(a,d){k(b,"select",["row",b[d]],!0)});return this});p("columns().select()","column().select()",
function(a){var b=this;if(!1===a)return this.deselect();this.iterator("column",function(b,a){q(b);b.aoColumns[a]._select_selected=!0;var f=(new h.Api(b)).column(a);e(f.header()).addClass(b._select.className);e(f.footer()).addClass(b._select.className);f.nodes().to$().addClass(b._select.className)});this.iterator("table",function(a,d){k(b,"select",["column",b[d]],!0)});return this});p("cells().select()","cell().select()",function(a){var b=this;if(!1===a)return this.deselect();this.iterator("cell",
function(b,a,f){q(b);a=b.aoData[a];a._selected_cells===i&&(a._selected_cells=[]);a._selected_cells[f]=!0;a.anCells&&e(a.anCells[f]).addClass(b._select.className)});this.iterator("table",function(a,d){k(b,"select",["cell",b[d]],!0)});return this});p("rows().deselect()","row().deselect()",function(){var a=this;this.iterator("row",function(b,a){b.aoData[a]._select_selected=!1;e(b.aoData[a].nTr).removeClass(b._select.className)});this.iterator("table",function(b,c){k(a,"deselect",["row",a[c]],!0)});return this});
p("columns().deselect()","column().deselect()",function(){var a=this;this.iterator("column",function(b,a){b.aoColumns[a]._select_selected=!1;var d=new h.Api(b),f=d.column(a);e(f.header()).removeClass(b._select.className);e(f.footer()).removeClass(b._select.className);d.cells(null,a).indexes().each(function(a){var c=b.aoData[a.row],d=c._selected_cells;c.anCells&&(!d||!d[a.column])&&e(c.anCells[a.column]).removeClass(b._select.className)})});this.iterator("table",function(b,c){k(a,"deselect",["column",
a[c]],!0)});return this});p("cells().deselect()","cell().deselect()",function(){var a=this;this.iterator("cell",function(b,a,d){a=b.aoData[a];a._selected_cells[d]=!1;a.anCells&&!b.aoColumns[d]._select_selected&&e(a.anCells[d]).removeClass(b._select.className)});this.iterator("table",function(b,c){k(a,"deselect",["cell",a[c]],!0)});return this});e.extend(h.ext.buttons,{selected:{text:r("selected","Selected"),className:"buttons-selected",init:function(a){var b=this;a.on("draw.dt.DT select.dt.DT deselect.dt.DT",
function(){var a=b.rows({selected:!0}).any()||b.columns({selected:!0}).any()||b.cells({selected:!0}).any();b.enable(a)});this.disable()}},selectedSingle:{text:r("selectedSingle","Selected single"),className:"buttons-selected-single",init:function(a){var b=this;a.on("draw.dt.DT select.dt.DT deselect.dt.DT",function(){var c=a.rows({selected:!0}).flatten().length+a.columns({selected:!0}).flatten().length+a.cells({selected:!0}).flatten().length;b.enable(1===c)});this.disable()}},selectAll:{text:r("selectAll",
"Select all"),className:"buttons-select-all",action:function(){this[this.select.items()+"s"]().select()}},selectNone:{text:r("selectNone","Deselect all"),className:"buttons-select-none",action:function(){q(this.settings()[0],!0)},init:function(a){var b=this;a.on("draw.dt.DT select.dt.DT deselect.dt.DT",function(){var c=a.rows({selected:!0}).flatten().length+a.columns({selected:!0}).flatten().length+a.cells({selected:!0}).flatten().length;b.enable(0<c)});this.disable()}}});e.each(["Row","Column","Cell"],
function(a,b){var c=b.toLowerCase();h.ext.buttons["select"+b+"s"]={text:r("select"+b+"s","Select "+c+"s"),className:"buttons-select-"+c+"s",action:function(){this.select.items(c)},init:function(a){var b=this;a.on("selectItems.dt.DT",function(a,d,e){b.active(e===c)})}}});e(l).on("preInit.dt.dtSelect",function(a,b){"dt"===a.namespace&&h.select.init(new h.Api(b))});return h.select});


/*...
 	/js/datatables/keytable/2.1.1/js/dataTables.keyTable.min.js
*/
/*!
 KeyTable 2.1.1
 ©2009-2016 SpryMedia Ltd - datatables.net/license
*/
(function(f){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(h){return f(h,window,document)}):"object"===typeof exports?module.exports=function(h,i){h||(h=window);if(!i||!i.fn.dataTable)i=require("datatables.net")(h,i).$;return f(i,h,h.document)}:f(jQuery,window,document)})(function(f,h,i,m){var g=f.fn.dataTable,k=function(a,b){if(!g.versionCheck||!g.versionCheck("1.10.8"))throw"KeyTable requires DataTables 1.10.8 or newer";this.c=f.extend(!0,{},g.defaults.keyTable,
k.defaults,b);this.s={dt:new g.Api(a),enable:!0,focusDraw:!1};this.dom={};var d=this.s.dt.settings()[0],c=d.keytable;if(c)return c;d.keytable=this;this._constructor()};f.extend(k.prototype,{blur:function(){this._blur()},enable:function(a){this.s.enable=a},focus:function(a,b){this._focus(this.s.dt.cell(a,b))},focused:function(a){if(!this.s.lastFocus)return!1;var b=this.s.lastFocus.index();return a.row===b.row&&a.column===b.column},_constructor:function(){this._tabInput();var a=this,b=this.s.dt,d=f(b.table().node());
"static"===d.css("position")&&d.css("position","relative");f(b.table().body()).on("click.keyTable","th, td",function(){if(!1!==a.s.enable){var c=b.cell(this);c.any()&&a._focus(c)}});f(i).on("keydown.keyTable",function(b){a._key(b)});if(this.c.blurable)f(i).on("click.keyTable",function(c){f(c.target).parents(".dataTables_filter").length&&a._blur();f(c.target).parents().filter(b.table().container()).length||f(c.target).parents("div.DTE").length||a._blur()});if(this.c.editor)b.on("key.keyTable",function(b,
c,d,f,i){a._editor(d,i)});if(b.settings()[0].oFeatures.bStateSave)b.on("stateSaveParams.keyTable",function(b,c,d){d.keyTable=a.s.lastFocus?a.s.lastFocus.index():null});b.on("xhr.keyTable",function(){if(!a.s.focusDraw){var c=a.s.lastFocus;c&&(a.s.lastFocus=null,b.one("draw",function(){a._focus(c)}))}});b.on("destroy.keyTable",function(){b.off(".keyTable");f(b.table().body()).off("click.keyTable","th, td");f(i.body).off("keydown.keyTable").off("click.keyTable")});var c=b.state.loaded();if(c&&c.keyTable)b.one("init",
function(){var a=b.cell(c.keyTable);a.any()&&a.focus()});else this.c.focus&&b.cell(this.c.focus).focus()},_blur:function(){if(this.s.enable&&this.s.lastFocus){var a=this.s.lastFocus;f(a.node()).removeClass(this.c.className);this.s.lastFocus=null;this._emitEvent("key-blur",[this.s.dt,a])}},_columns:function(){var a=this.s.dt,b=a.columns(this.c.columns).indexes(),d=[];a.columns(":visible").every(function(a){-1!==b.indexOf(a)&&d.push(a)});return d},_editor:function(a,b){var d=this.s.dt,c=this.c.editor;
b.stopPropagation();c.inline(this.s.lastFocus.index());var e=f("div.DTE input, div.DTE textarea");e.length&&e[0].select();d.keys.enable("navigation-only");d.one("key-blur.editor",function(){c.displayed()&&c.submit()});c.one("close",function(){d.keys.enable(!0);d.off("key-blur.editor")})},_emitEvent:function(a,b){this.s.dt.iterator("table",function(d){f(d.nTable).triggerHandler(a,b)})},_focus:function(a,b){var d=this,c=this.s.dt,e=c.page.info(),l=this.s.lastFocus;if(this.s.enable){if("number"!==typeof a){var j=
a.index(),b=j.column,a=c.rows({filter:"applied",order:"applied"}).indexes().indexOf(j.row);e.serverSide&&(a+=e.start)}if(-1!==e.length&&(a<e.start||a>=e.start+e.length))this.s.focusDraw=!0,c.one("draw",function(){d.s.focusDraw=!1;d._focus(a,b)}).page(Math.floor(a/e.length)).draw(!1);else if(-1!==f.inArray(b,this._columns())){e.serverSide&&(a-=e.start);e=c.cell(":eq("+a+")",b,{search:"applied"});if(l){if(l.node()===e.node())return;this._blur()}l=f(e.node());l.addClass(this.c.className);this._scroll(f(h),
f(i.body),l,"offset");j=c.table().body().parentNode;j!==c.table().header().parentNode&&(j=f(j.parentNode),this._scroll(j,j,l,"position"));this.s.lastFocus=e;this._emitEvent("key-focus",[this.s.dt,e]);c.state.save()}}},_key:function(a){if(this.s.enable&&!(0===a.keyCode||a.ctrlKey||a.metaKey||a.altKey)){var b=this.s.lastFocus;if(b){var d=this,c=this.s.dt;if(!(this.c.keys&&-1===f.inArray(a.keyCode,this.c.keys)))switch(a.keyCode){case 9:this._shift(a,a.shiftKey?"left":"right",!0);break;case 27:this.s.blurable&&
!0===this.s.enable&&this._blur();break;case 33:case 34:a.preventDefault();var e=c.cells({page:"current"}).nodes().indexOf(b.node());c.one("draw",function(){var a=c.cells({page:"current"}).nodes();d._focus(c.cell(e<a.length?a[e]:a[a.length-1]))}).page(33===a.keyCode?"previous":"next").draw(!1);break;case 35:case 36:a.preventDefault();b=c.cells({page:"current"}).indexes();this._focus(c.cell(b[35===a.keyCode?b.length-1:0]));break;case 37:this._shift(a,"left");break;case 38:this._shift(a,"up");break;
case 39:this._shift(a,"right");break;case 40:this._shift(a,"down");break;default:!0===this.s.enable&&this._emitEvent("key",[c,a.keyCode,this.s.lastFocus,a])}}}},_scroll:function(a,b,d,c){var c=d[c](),e=d.outerHeight(),d=d.outerWidth(),f=b.scrollTop(),j=b.scrollLeft(),i=a.height(),a=a.width();c.top<f&&b.scrollTop(c.top);c.left<j&&b.scrollLeft(c.left);c.top+e>f+i&&b.scrollTop(c.top+e-i);c.left+d>j+a&&b.scrollLeft(c.left+d-a)},_shift:function(a,b,d){var c=this.s.dt,e=c.page.info(),i=e.recordsDisplay,
j=this.s.lastFocus,g=this._columns();if(j){var h=c.rows({filter:"applied",order:"applied"}).indexes().indexOf(j.index().row);e.serverSide&&(h+=e.start);c=c.columns(g).indexes().indexOf(j.index().column);e=g[c];"right"===b?c>=g.length-1?(h++,e=g[0]):e=g[c+1]:"left"===b?0===c?(h--,e=g[g.length-1]):e=g[c-1]:"up"===b?h--:"down"===b&&h++;0<=h&&h<i&&-1!==f.inArray(e,g)?(a.preventDefault(),this._focus(h,e)):!d||!this.c.blurable?a.preventDefault():this._blur()}},_tabInput:function(){var a=this,b=this.s.dt,
d=null!==this.c.tabIndex?this.c.tabIndex:b.settings()[0].iTabIndex;if(-1!=d)f('<div><input type="text" tabindex="'+d+'"/></div>').css({position:"absolute",height:1,width:0,overflow:"hidden"}).insertBefore(b.table().node()).children().on("focus",function(){a._focus(b.cell(":eq(0)","0:visible",{page:"current"}))})}});k.defaults={blurable:!0,className:"focus",columns:"",editor:null,focus:null,keys:null,tabIndex:null};k.version="2.1.1";f.fn.dataTable.KeyTable=k;f.fn.DataTable.KeyTable=k;g.Api.register("cell.blur()",
function(){return this.iterator("table",function(a){a.keytable&&a.keytable.blur()})});g.Api.register("cell().focus()",function(){return this.iterator("cell",function(a,b,d){a.keytable&&a.keytable.focus(b,d)})});g.Api.register("keys.disable()",function(){return this.iterator("table",function(a){a.keytable&&a.keytable.enable(!1)})});g.Api.register("keys.enable()",function(a){return this.iterator("table",function(b){b.keytable&&b.keytable.enable(a===m?!0:a)})});g.ext.selector.cell.push(function(a,b,
d){var b=b.focused,a=a.keytable,c=[];if(!a||b===m)return d;for(var e=0,f=d.length;e<f;e++)(!0===b&&a.focused(d[e])||!1===b&&!a.focused(d[e]))&&c.push(d[e]);return c});f(i).on("preInit.dt.dtk",function(a,b){if("dt"===a.namespace){var d=b.oInit.keys,c=g.defaults.keys;if(d||c)c=f.extend({},d,c),!1!==d&&new k(b,c)}});return k});


/*...
 	/js/moment/moment.min.js
*/
//! moment.js
//! version : 2.8.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me")}}function c(a,b){return zb.call(a,b)}function d(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function e(a){tb.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function f(a,b){var c=!0;return m(function(){return c&&(e(a),c=!1),b.apply(this,arguments)},b)}function g(a,b){qc[a]||(e(b),qc[a]=!0)}function h(a,b){return function(c){return p(a.call(this,c),b)}}function i(a,b){return function(c){return this.localeData().ordinal(a.call(this,c),b)}}function j(){}function k(a,b){b!==!1&&F(a),n(this,a),this._d=new Date(+a._d)}function l(a){var b=y(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=tb.localeData(),this._bubble()}function m(a,b){for(var d in b)c(b,d)&&(a[d]=b[d]);return c(b,"toString")&&(a.toString=b.toString),c(b,"valueOf")&&(a.valueOf=b.valueOf),a}function n(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=b._pf),"undefined"!=typeof b._locale&&(a._locale=b._locale),Ib.length>0)for(c in Ib)d=Ib[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function o(a){return 0>a?Math.ceil(a):Math.floor(a)}function p(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function q(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function r(a,b){var c;return b=K(b,a),a.isBefore(b)?c=q(a,b):(c=q(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function s(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(g(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=tb.duration(c,d),t(this,e,a),this}}function t(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&nb(a,"Date",mb(a,"Date")+f*c),g&&lb(a,mb(a,"Month")+g*c),d&&tb.updateOffset(a,f||g)}function u(a){return"[object Array]"===Object.prototype.toString.call(a)}function v(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function w(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&A(a[d])!==A(b[d]))&&g++;return g+f}function x(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=jc[a]||kc[b]||b}return a}function y(a){var b,d,e={};for(d in a)c(a,d)&&(b=x(d),b&&(e[b]=a[d]));return e}function z(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}tb[b]=function(e,f){var g,h,i=tb._locale[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=tb().utc().set(d,a);return i.call(tb._locale,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function A(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function B(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function C(a,b,c){return hb(tb([a,11,31+b-c]),b,c).week}function D(a){return E(a)?366:365}function E(a){return a%4===0&&a%100!==0||a%400===0}function F(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[Bb]<0||a._a[Bb]>11?Bb:a._a[Cb]<1||a._a[Cb]>B(a._a[Ab],a._a[Bb])?Cb:a._a[Db]<0||a._a[Db]>24||24===a._a[Db]&&(0!==a._a[Eb]||0!==a._a[Fb]||0!==a._a[Gb])?Db:a._a[Eb]<0||a._a[Eb]>59?Eb:a._a[Fb]<0||a._a[Fb]>59?Fb:a._a[Gb]<0||a._a[Gb]>999?Gb:-1,a._pf._overflowDayOfYear&&(Ab>b||b>Cb)&&(b=Cb),a._pf.overflow=b)}function G(b){return null==b._isValid&&(b._isValid=!isNaN(b._d.getTime())&&b._pf.overflow<0&&!b._pf.empty&&!b._pf.invalidMonth&&!b._pf.nullInput&&!b._pf.invalidFormat&&!b._pf.userInvalidated,b._strict&&(b._isValid=b._isValid&&0===b._pf.charsLeftOver&&0===b._pf.unusedTokens.length&&b._pf.bigHour===a)),b._isValid}function H(a){return a?a.toLowerCase().replace("_","-"):a}function I(a){for(var b,c,d,e,f=0;f<a.length;){for(e=H(a[f]).split("-"),b=e.length,c=H(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=J(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&w(e,c,!0)>=b-1)break;b--}f++}return null}function J(a){var b=null;if(!Hb[a]&&Jb)try{b=tb.locale(),require("./locale/"+a),tb.locale(b)}catch(c){}return Hb[a]}function K(a,b){var c,d;return b._isUTC?(c=b.clone(),d=(tb.isMoment(a)||v(a)?+a:+tb(a))-+c,c._d.setTime(+c._d+d),tb.updateOffset(c,!1),c):tb(a).local()}function L(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function M(a){var b,c,d=a.match(Nb);for(b=0,c=d.length;c>b;b++)d[b]=pc[d[b]]?pc[d[b]]:L(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function N(a,b){return a.isValid()?(b=O(b,a.localeData()),lc[b]||(lc[b]=M(b)),lc[b](a)):a.localeData().invalidDate()}function O(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Ob.lastIndex=0;d>=0&&Ob.test(a);)a=a.replace(Ob,c),Ob.lastIndex=0,d-=1;return a}function P(a,b){var c,d=b._strict;switch(a){case"Q":return Zb;case"DDDD":return _b;case"YYYY":case"GGGG":case"gggg":return d?ac:Rb;case"Y":case"G":case"g":return cc;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?bc:Sb;case"S":if(d)return Zb;case"SS":if(d)return $b;case"SSS":if(d)return _b;case"DDD":return Qb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Ub;case"a":case"A":return b._locale._meridiemParse;case"x":return Xb;case"X":return Yb;case"Z":case"ZZ":return Vb;case"T":return Wb;case"SSSS":return Tb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?$b:Pb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Pb;case"Do":return d?b._locale._ordinalParse:b._locale._ordinalParseLenient;default:return c=new RegExp(Y(X(a.replace("\\","")),"i"))}}function Q(a){a=a||"";var b=a.match(Vb)||[],c=b[b.length-1]||[],d=(c+"").match(hc)||["-",0,0],e=+(60*d[1])+A(d[2]);return"+"===d[0]?-e:e}function R(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[Bb]=3*(A(b)-1));break;case"M":case"MM":null!=b&&(e[Bb]=A(b)-1);break;case"MMM":case"MMMM":d=c._locale.monthsParse(b,a,c._strict),null!=d?e[Bb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[Cb]=A(b));break;case"Do":null!=b&&(e[Cb]=A(parseInt(b.match(/\d{1,2}/)[0],10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=A(b));break;case"YY":e[Ab]=tb.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[Ab]=A(b);break;case"a":case"A":c._isPm=c._locale.isPM(b);break;case"h":case"hh":c._pf.bigHour=!0;case"H":case"HH":e[Db]=A(b);break;case"m":case"mm":e[Eb]=A(b);break;case"s":case"ss":e[Fb]=A(b);break;case"S":case"SS":case"SSS":case"SSSS":e[Gb]=A(1e3*("0."+b));break;case"x":c._d=new Date(A(b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=Q(b);break;case"dd":case"ddd":case"dddd":d=c._locale.weekdaysParse(b),null!=d?(c._w=c._w||{},c._w.d=d):c._pf.invalidWeekday=b;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":a=a.substr(0,1);case"gggg":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=A(b));break;case"gg":case"GG":c._w=c._w||{},c._w[a]=tb.parseTwoDigitYear(b)}}function S(a){var c,d,e,f,g,h,i;c=a._w,null!=c.GG||null!=c.W||null!=c.E?(g=1,h=4,d=b(c.GG,a._a[Ab],hb(tb(),1,4).year),e=b(c.W,1),f=b(c.E,1)):(g=a._locale._week.dow,h=a._locale._week.doy,d=b(c.gg,a._a[Ab],hb(tb(),g,h).year),e=b(c.w,1),null!=c.d?(f=c.d,g>f&&++e):f=null!=c.e?c.e+g:g),i=ib(d,e,f,h,g),a._a[Ab]=i.year,a._dayOfYear=i.dayOfYear}function T(a){var c,d,e,f,g=[];if(!a._d){for(e=V(a),a._w&&null==a._a[Cb]&&null==a._a[Bb]&&S(a),a._dayOfYear&&(f=b(a._a[Ab],e[Ab]),a._dayOfYear>D(f)&&(a._pf._overflowDayOfYear=!0),d=db(f,0,a._dayOfYear),a._a[Bb]=d.getUTCMonth(),a._a[Cb]=d.getUTCDate()),c=0;3>c&&null==a._a[c];++c)a._a[c]=g[c]=e[c];for(;7>c;c++)a._a[c]=g[c]=null==a._a[c]?2===c?1:0:a._a[c];24===a._a[Db]&&0===a._a[Eb]&&0===a._a[Fb]&&0===a._a[Gb]&&(a._nextDay=!0,a._a[Db]=0),a._d=(a._useUTC?db:cb).apply(null,g),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()+a._tzm),a._nextDay&&(a._a[Db]=24)}}function U(a){var b;a._d||(b=y(a._i),a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],T(a))}function V(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function W(b){if(b._f===tb.ISO_8601)return void $(b);b._a=[],b._pf.empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=O(b._f,b._locale).match(Nb)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(P(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&b._pf.unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),pc[f]?(d?b._pf.empty=!1:b._pf.unusedTokens.push(f),R(f,d,b)):b._strict&&!d&&b._pf.unusedTokens.push(f);b._pf.charsLeftOver=i-j,h.length>0&&b._pf.unusedInput.push(h),b._pf.bigHour===!0&&b._a[Db]<=12&&(b._pf.bigHour=a),b._isPm&&b._a[Db]<12&&(b._a[Db]+=12),b._isPm===!1&&12===b._a[Db]&&(b._a[Db]=0),T(b),F(b)}function X(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function Y(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Z(a){var b,c,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=n({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._pf=d(),b._f=a._f[f],W(b),G(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,c=b));m(a,c||b)}function $(a){var b,c,d=a._i,e=dc.exec(d);if(e){for(a._pf.iso=!0,b=0,c=fc.length;c>b;b++)if(fc[b][1].exec(d)){a._f=fc[b][0]+(e[6]||" ");break}for(b=0,c=gc.length;c>b;b++)if(gc[b][1].exec(d)){a._f+=gc[b][0];break}d.match(Vb)&&(a._f+="Z"),W(a)}else a._isValid=!1}function _(a){$(a),a._isValid===!1&&(delete a._isValid,tb.createFromInputFallback(a))}function ab(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function bb(b){var c,d=b._i;d===a?b._d=new Date:v(d)?b._d=new Date(+d):null!==(c=Kb.exec(d))?b._d=new Date(+c[1]):"string"==typeof d?_(b):u(d)?(b._a=ab(d.slice(0),function(a){return parseInt(a,10)}),T(b)):"object"==typeof d?U(b):"number"==typeof d?b._d=new Date(d):tb.createFromInputFallback(b)}function cb(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function db(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function eb(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function fb(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function gb(a,b,c){var d=tb.duration(a).abs(),e=yb(d.as("s")),f=yb(d.as("m")),g=yb(d.as("h")),h=yb(d.as("d")),i=yb(d.as("M")),j=yb(d.as("y")),k=e<mc.s&&["s",e]||1===f&&["m"]||f<mc.m&&["mm",f]||1===g&&["h"]||g<mc.h&&["hh",g]||1===h&&["d"]||h<mc.d&&["dd",h]||1===i&&["M"]||i<mc.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,fb.apply({},k)}function hb(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=tb(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ib(a,b,c,d,e){var f,g,h=db(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:D(a-1)+g}}function jb(b){var c,d=b._i,e=b._f;return b._locale=b._locale||tb.localeData(b._l),null===d||e===a&&""===d?tb.invalid({nullInput:!0}):("string"==typeof d&&(b._i=d=b._locale.preparse(d)),tb.isMoment(d)?new k(d,!0):(e?u(e)?Z(b):W(b):bb(b),c=new k(b),c._nextDay&&(c.add(1,"d"),c._nextDay=a),c))}function kb(a,b){var c,d;if(1===b.length&&u(b[0])&&(b=b[0]),!b.length)return tb();for(c=b[0],d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function lb(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),B(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function mb(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function nb(a,b,c){return"Month"===b?lb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function ob(a,b){return function(c){return null!=c?(nb(this,a,c),tb.updateOffset(this,b),this):mb(this,a)}}function pb(a){return 400*a/146097}function qb(a){return 146097*a/400}function rb(a){tb.duration.fn[a]=function(){return this._data[a]}}function sb(a){"undefined"==typeof ender&&(ub=xb.moment,xb.moment=a?f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",tb):tb)}for(var tb,ub,vb,wb="2.8.4",xb="undefined"!=typeof global?global:this,yb=Math.round,zb=Object.prototype.hasOwnProperty,Ab=0,Bb=1,Cb=2,Db=3,Eb=4,Fb=5,Gb=6,Hb={},Ib=[],Jb="undefined"!=typeof module&&module&&module.exports,Kb=/^\/?Date\((\-?\d+)/i,Lb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Mb=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Nb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,Ob=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Pb=/\d\d?/,Qb=/\d{1,3}/,Rb=/\d{1,4}/,Sb=/[+\-]?\d{1,6}/,Tb=/\d+/,Ub=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Vb=/Z|[\+\-]\d\d:?\d\d/gi,Wb=/T/i,Xb=/[\+\-]?\d+/,Yb=/[\+\-]?\d+(\.\d{1,3})?/,Zb=/\d/,$b=/\d\d/,_b=/\d{3}/,ac=/\d{4}/,bc=/[+-]?\d{6}/,cc=/[+-]?\d+/,dc=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ec="YYYY-MM-DDTHH:mm:ssZ",fc=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],gc=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],hc=/([\+\-]|\d\d)/gi,ic=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),jc={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},kc={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},lc={},mc={s:45,m:45,h:22,d:26,M:11},nc="DDD w W M D d".split(" "),oc="M D H h m s w W".split(" "),pc={M:function(){return this.month()+1},MMM:function(a){return this.localeData().monthsShort(this,a)},MMMM:function(a){return this.localeData().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.localeData().weekdaysMin(this,a)},ddd:function(a){return this.localeData().weekdaysShort(this,a)},dddd:function(a){return this.localeData().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return p(this.year()%100,2)},YYYY:function(){return p(this.year(),4)},YYYYY:function(){return p(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+p(Math.abs(a),6)},gg:function(){return p(this.weekYear()%100,2)},gggg:function(){return p(this.weekYear(),4)},ggggg:function(){return p(this.weekYear(),5)},GG:function(){return p(this.isoWeekYear()%100,2)},GGGG:function(){return p(this.isoWeekYear(),4)},GGGGG:function(){return p(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return A(this.milliseconds()/100)},SS:function(){return p(A(this.milliseconds()/10),2)},SSS:function(){return p(this.milliseconds(),3)},SSSS:function(){return p(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+":"+p(A(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+p(A(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},x:function(){return this.valueOf()},X:function(){return this.unix()},Q:function(){return this.quarter()}},qc={},rc=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];nc.length;)vb=nc.pop(),pc[vb+"o"]=i(pc[vb],vb);for(;oc.length;)vb=oc.pop(),pc[vb+vb]=h(pc[vb],2);pc.DDDD=h(pc.DDD,3),m(j.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=tb.utc([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=tb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.apply(b,[c]):d},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",_ordinalParse:/\d{1,2}/,preparse:function(a){return a},postformat:function(a){return a},week:function(a){return hb(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),tb=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=b,g._f=c,g._l=e,g._strict=f,g._isUTC=!1,g._pf=d(),jb(g)},tb.suppressDeprecationWarnings=!1,tb.createFromInputFallback=f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),tb.min=function(){var a=[].slice.call(arguments,0);return kb("isBefore",a)},tb.max=function(){var a=[].slice.call(arguments,0);return kb("isAfter",a)},tb.utc=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=b,g._f=c,g._strict=f,g._pf=d(),jb(g).utc()},tb.unix=function(a){return tb(1e3*a)},tb.duration=function(a,b){var d,e,f,g,h=a,i=null;return tb.isDuration(a)?h={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(h={},b?h[b]=a:h.milliseconds=a):(i=Lb.exec(a))?(d="-"===i[1]?-1:1,h={y:0,d:A(i[Cb])*d,h:A(i[Db])*d,m:A(i[Eb])*d,s:A(i[Fb])*d,ms:A(i[Gb])*d}):(i=Mb.exec(a))?(d="-"===i[1]?-1:1,f=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*d},h={y:f(i[2]),M:f(i[3]),d:f(i[4]),h:f(i[5]),m:f(i[6]),s:f(i[7]),w:f(i[8])}):"object"==typeof h&&("from"in h||"to"in h)&&(g=r(tb(h.from),tb(h.to)),h={},h.ms=g.milliseconds,h.M=g.months),e=new l(h),tb.isDuration(a)&&c(a,"_locale")&&(e._locale=a._locale),e},tb.version=wb,tb.defaultFormat=ec,tb.ISO_8601=function(){},tb.momentProperties=Ib,tb.updateOffset=function(){},tb.relativeTimeThreshold=function(b,c){return mc[b]===a?!1:c===a?mc[b]:(mc[b]=c,!0)},tb.lang=f("moment.lang is deprecated. Use moment.locale instead.",function(a,b){return tb.locale(a,b)}),tb.locale=function(a,b){var c;return a&&(c="undefined"!=typeof b?tb.defineLocale(a,b):tb.localeData(a),c&&(tb.duration._locale=tb._locale=c)),tb._locale._abbr},tb.defineLocale=function(a,b){return null!==b?(b.abbr=a,Hb[a]||(Hb[a]=new j),Hb[a].set(b),tb.locale(a),Hb[a]):(delete Hb[a],null)},tb.langData=f("moment.langData is deprecated. Use moment.localeData instead.",function(a){return tb.localeData(a)}),tb.localeData=function(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return tb._locale;if(!u(a)){if(b=J(a))return b;a=[a]}return I(a)},tb.isMoment=function(a){return a instanceof k||null!=a&&c(a,"_isAMomentObject")},tb.isDuration=function(a){return a instanceof l};for(vb=rc.length-1;vb>=0;--vb)z(rc[vb]);tb.normalizeUnits=function(a){return x(a)},tb.invalid=function(a){var b=tb.utc(0/0);return null!=a?m(b._pf,a):b._pf.userInvalidated=!0,b},tb.parseZone=function(){return tb.apply(null,arguments).parseZone()},tb.parseTwoDigitYear=function(a){return A(a)+(A(a)>68?1900:2e3)},m(tb.fn=k.prototype,{clone:function(){return tb(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=tb(this).utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():N(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):N(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return G(this)},isDSTShifted:function(){return this._a?this.isValid()&&w(this._a,(this._isUTC?tb.utc(this._a):tb(this._a)).toArray())>0:!1},parsingFlags:function(){return m({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(a){return this.zone(0,a)},local:function(a){return this._isUTC&&(this.zone(0,a),this._isUTC=!1,a&&this.add(this._dateTzOffset(),"m")),this},format:function(a){var b=N(this,a||tb.defaultFormat);return this.localeData().postformat(b)},add:s(1,"add"),subtract:s(-1,"subtract"),diff:function(a,b,c){var d,e,f,g=K(a,this),h=6e4*(this.zone()-g.zone());return b=x(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+g.daysInMonth()),e=12*(this.year()-g.year())+(this.month()-g.month()),f=this-tb(this).startOf("month")-(g-tb(g).startOf("month")),f-=6e4*(this.zone()-tb(this).startOf("month").zone()-(g.zone()-tb(g).startOf("month").zone())),e+=f/d,"year"===b&&(e/=12)):(d=this-g,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-h)/864e5:"week"===b?(d-h)/6048e5:d),c?e:o(e)},from:function(a,b){return tb.duration({to:this,from:a}).locale(this.locale()).humanize(!b)},fromNow:function(a){return this.from(tb(),a)},calendar:function(a){var b=a||tb(),c=K(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this,tb(b)))},isLeapYear:function(){return E(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=eb(a,this.localeData()),this.add(a-b,"d")):b},month:ob("Month",!0),startOf:function(a){switch(a=x(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(b){return b=x(b),b===a||"millisecond"===b?this:this.startOf(b).add(1,"isoWeek"===b?"week":b).subtract(1,"ms")},isAfter:function(a,b){var c;return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+this>+a):(c=tb.isMoment(a)?+a:+tb(a),c<+this.clone().startOf(b))},isBefore:function(a,b){var c;return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+a>+this):(c=tb.isMoment(a)?+a:+tb(a),+this.clone().endOf(b)<c)},isSame:function(a,b){var c;return b=x(b||"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+this===+a):(c=+tb(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))},min:f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(a){return a=tb.apply(null,arguments),this>a?this:a}),max:f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(a){return a=tb.apply(null,arguments),a>this?this:a}),zone:function(a,b){var c,d=this._offset||0;return null==a?this._isUTC?d:this._dateTzOffset():("string"==typeof a&&(a=Q(a)),Math.abs(a)<16&&(a=60*a),!this._isUTC&&b&&(c=this._dateTzOffset()),this._offset=a,this._isUTC=!0,null!=c&&this.subtract(c,"m"),d!==a&&(!b||this._changeInProgress?t(this,tb.duration(d-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,tb.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?tb(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return B(this.year(),this.month())},dayOfYear:function(a){var b=yb((tb(this).startOf("day")-tb(this).startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=hb(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")},isoWeekYear:function(a){var b=hb(this,1,4).year;return null==a?b:this.add(a-b,"y")},week:function(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")},isoWeek:function(a){var b=hb(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")},weekday:function(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return C(this.year(),1,4)},weeksInYear:function(){var a=this.localeData()._week;return C(this.year(),a.dow,a.doy)},get:function(a){return a=x(a),this[a]()},set:function(a,b){return a=x(a),"function"==typeof this[a]&&this[a](b),this},locale:function(b){var c;return b===a?this._locale._abbr:(c=tb.localeData(b),null!=c&&(this._locale=c),this)},lang:f("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(b){return b===a?this.localeData():this.locale(b)}),localeData:function(){return this._locale},_dateTzOffset:function(){return 15*Math.round(this._d.getTimezoneOffset()/15)}}),tb.fn.millisecond=tb.fn.milliseconds=ob("Milliseconds",!1),tb.fn.second=tb.fn.seconds=ob("Seconds",!1),tb.fn.minute=tb.fn.minutes=ob("Minutes",!1),tb.fn.hour=tb.fn.hours=ob("Hours",!0),tb.fn.date=ob("Date",!0),tb.fn.dates=f("dates accessor is deprecated. Use date instead.",ob("Date",!0)),tb.fn.year=ob("FullYear",!0),tb.fn.years=f("years accessor is deprecated. Use year instead.",ob("FullYear",!0)),tb.fn.days=tb.fn.day,tb.fn.months=tb.fn.month,tb.fn.weeks=tb.fn.week,tb.fn.isoWeeks=tb.fn.isoWeek,tb.fn.quarters=tb.fn.quarter,tb.fn.toJSON=tb.fn.toISOString,m(tb.duration.fn=l.prototype,{_bubble:function(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;g.milliseconds=d%1e3,a=o(d/1e3),g.seconds=a%60,b=o(a/60),g.minutes=b%60,c=o(b/60),g.hours=c%24,e+=o(c/24),h=o(pb(e)),e-=o(qb(h)),f+=o(e/30),e%=30,h+=o(f/12),f%=12,g.days=e,g.months=f,g.years=h},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*A(this._months/12)},humanize:function(a){var b=gb(this,!a,this.localeData());return a&&(b=this.localeData().pastFuture(+this,b)),this.localeData().postformat(b)},add:function(a,b){var c=tb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=tb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=x(a),this[a.toLowerCase()+"s"]()},as:function(a){var b,c;if(a=x(a),"month"===a||"year"===a)return b=this._days+this._milliseconds/864e5,c=this._months+12*pb(b),"month"===a?c:c/12;switch(b=this._days+Math.round(qb(this._months/12)),a){case"week":return b/7+this._milliseconds/6048e5;case"day":return b+this._milliseconds/864e5;case"hour":return 24*b+this._milliseconds/36e5;case"minute":return 24*b*60+this._milliseconds/6e4;case"second":return 24*b*60*60+this._milliseconds/1e3;
case"millisecond":return Math.floor(24*b*60*60*1e3)+this._milliseconds;default:throw new Error("Unknown unit "+a)}},lang:tb.fn.lang,locale:tb.fn.locale,toIsoString:f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"},localeData:function(){return this._locale}}),tb.duration.fn.toString=tb.duration.fn.toISOString;for(vb in ic)c(ic,vb)&&rb(vb.toLowerCase());tb.duration.fn.asMilliseconds=function(){return this.as("ms")},tb.duration.fn.asSeconds=function(){return this.as("s")},tb.duration.fn.asMinutes=function(){return this.as("m")},tb.duration.fn.asHours=function(){return this.as("h")},tb.duration.fn.asDays=function(){return this.as("d")},tb.duration.fn.asWeeks=function(){return this.as("weeks")},tb.duration.fn.asMonths=function(){return this.as("M")},tb.duration.fn.asYears=function(){return this.as("y")},tb.locale("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===A(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),Jb?module.exports=tb:"function"==typeof define&&define.amd?(define("moment",function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(xb.moment=ub),tb}),sb(!0)):sb()}).call(this);