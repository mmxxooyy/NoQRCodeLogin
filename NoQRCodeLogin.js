// ==UserScript==
// @name         拒绝二维码登录
// @namespace    NoQRCodeLogin
// @version      2.2.8
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAEECAYAAADOCEoKAAAa3klEQVR4Xu2d23YbSw5DT/7/ozPLuYwvkb13NyG6ZWNeq0gCIAmVlJzMj58/f/78r/+rAlWgCvz3338/agidgypQBf4qUEPoLFSBKvB/BWoIHYYqUAVqCJ2BKlAF/lWgL4RORRWoAn0hdAaqQBXoC6EzUAWqwAcK4FeGHz9+fBsBp38lY0urK+CcYrjKUG317Ap8Tc9qCC86ZQT7qLFbw3UFnFMMV1iQJwxbPbsCX9OzGkIN4dSsmuE6lXg5qIbwWvAaQg3h1ArWEE7J9qlBpmc1hBrCqSE1w3Uq8XJQXwh9Ibw7ctMh3xquK+CcYlje+3fLbfXsCnxNz/pC6Avh1Kya4TqVeDmohtAXQl8IgT9KriEsO1egnOnZ+IVgigS4jFOYT4IrcDE4SQziYWpMc1C8+SM/k4O0oPOEFlRj65y4GD1rCMGvDInGU1NNDWq8qTHNQfE1BNPJY3eor6on9A+kJIoco3Wf28TjqaoR7D7onrManISBeJga0xwUX0OgLh4/p76qntQQnoU3gh1v07EIaqrJRjxMjWkOiq8hmE4eu0N9VT2pIdQQbo0dDU9k+ODHTcJwbF1u3yYeV3k5Gq7ExejZ3xD6G8LNWaPhiQxfDcHsub4T6UlfCH0h9IXw8c6ROeqNvfPFGsIBgUmsqzwNDU6iTQNsakxzUHx/Q6AuHj+nvqqe9IXQF0JfCH0h/FVg5TcEcq7jXvhvBLmfwUA5CKepQTnM+RSnqTHlYjBSDZPDcPnoDmEwL0eTY4rTaEE4VI6NFwIBnYqVapoRbDpcG1wTNaY9M1pSDZNjypUwpGZritNoQVxUjhpC7isDNWQ6FH/jTWOntaZcDEaqYXJs8CQcxGOK0ZhS6jeZfmV40S1qPDV2YzDscBBWOp9yMVpSDZODeNA5YTB6mxyEg86NFoRD5egLoS+EW8NIw3WVASYcdG540iKZHISDzglDXwhvFCTBTNMoBzXN1KAc5nyK09SYcjEYqYbJYbh8dIcw9IXwRj0SzDSNckybmmqa4TIdrg2uiRrTnhktqYbJMeVKGFKzNcVptCAuKke/MvQrQ78yfLyutEi0iFMzMKbUrwyf8JWBGk+DY5pmhofqJHASDqpB8WbITQ3SgnAkapgchIPODU/CoXL0heBfCBHBF/75sgROGlCqQfE1BKOQn03zYVNDeKG5GWASjHJQvGmaGROqk8BJOKgGxdcQjEI1hGMqvbg9XZLEgBKGGsLr9pJexnQoBw1UoobJQTjo3PAkHCpHvzJ4F44I3q8M/xecBpT0NiZOi5aoYXIQDjonrcyHjcpRQ6gh0DDeOk8sAQ2oqUE5iFuihslBOOjc8CQcKkcNoYZAw1hD+PmhRLSIZ/R9G6OWOfAvUPW/ZQj+DpFomhkeqkMDSvEGA9UwOQiHqUE5CEeihslBOOjc8CQcKkdfCNd6IaimDX+HMDVoQGn4KH7rnLgaHokcU76Eob8hvFGYBNtoPGGINa2GoPeLerIxFxrsBxeJR2y2+kLoC+HMwJpFOpM3HUOLZHgkckx5EYYaQl8Ip2fMDBclN4tEOTbOiavhkcgx5UoYagg1hNMzZoaLkptFohwb58TV8EjkmHIlDDWEGsLpGTPDRcnNIlGOjXPiangkcky5EoYaQg3h9IyZ4aLkZpEox8Y5cTU8EjmmXAlDDaGGcHrGzHBRcrNIlGPjnLgaHokcU66EoYZQQzg9Y2a4KLlZJMqxcU5cDY9EjilXwvBQhjAVIxGfaDzhMDUoh2k85bgCDoNhgyvV2MJJPUucExfS4pepbPw9hATZaQ4S6ym/EewjHKYG8ZhiMJ8UhGFLiw2uVMP0jHIYPTfuEBfDo4bwolNGsBqCG20azoTpGPOjnm7hdKrNbhEX0qIvhDf6G8FqCG5oaThrCE7HI7dIczPffSH0hXBz5szwTM1xWqMvhNcdqCEcsE8SK/GJZWoQ5I0lIQxbWmxwpRqmZ5TD6Llxh7gYHn0h9IXQFwJsq1mkjYWnGjUEUujFOYm19alIkBPDZ7jeG4fBsMGVamzhJL0T58SFtIj8qJggcpUcJFhE8MQ/czXMQTyMOVIO0jLx/T+Rg3hcZTYTOFRPpn8PIQH0KjlIMBoeik8McCIH8aghXGUiszjUfNYQnkUnwWiRKD6xzIkcxKOGkF3Eq2RT81lDqCHcGlgaHjIVik8YWyIH8bjKMidwqJ7UEGoINYTEul0/Rw3hYI9IMPo0ofjEJ1oiB/HoV4aDg/Mg19V89oXQF0JfCA+y0UOYNYSDApJg9MlK8YlP90QO4tEXwsHBeZDraj77QugLoS+EB9noIcyIIQwxfKvwxCevEYzqUOMpfuuFYLjSHeJCWlD+73aO/y3DdxNkwpeG0yyaqU91aAko3uCkHITB8DR3roLDYH2EOzWEYJdoOM2iGThUh5aR4g1OykEYDE9z5yo4DNZHuFNDCHaJhtMsmoFDdWgZKd7gpByEwfA0d66Cw2B9hDs1hGCXaDjNohk4VIeWkeINTspBGAxPc+cqOAzWR7hTQwh2iYbTLJqBQ3VoGSne4KQchMHwNHeugsNgfYQ7NYRgl2g4zaIZOFSHlpHiDU7KQRgMT3PnKjgM1ke4U0MIdomG0yyagUN1aBkp3uCkHITB8DR3roLDYH2EO2gIJLghuTEcCZzEhXgkMFCNJ4yJOsSVzgmnwbiRg3gkzg1XqkNaUHzqvIZwQElq2tZgJOocoH3zakKLjRxTniY+0Q/SwuBI3KkhHFCRmrY1GIk6B2jXEECsRD9otqb9svE1BKuU+L962xqMRJ0DtGsINYRnBRLDt+F+CZy0JMQjgYFq9DeE110yelFfp+dbfZ/iNPF9IRiV/tyh4dsajESdA7T7QugLoS+EWzNQQ3hWJaHFRo6p8Zn4hEGTFgZH4k5fCAdUpKZtDUaizgHafSH0heBfCLQk08FLfWc2OKeLlqhhckw1nfJ8qk84EzUMzykOit+av4RehgtpOn4hJEAgSPh/KqJ4M8CJxhstqPEmh+H70R3CYPITzkSNDRzEIzEXZv4SehkupGkN4YVC06aYhlANk4OaSueEgeK3BnwDh9H7UfQyXEjTGkINgWbkbr8hnCr8JoiWgJaZ4vtCeCN4QtBp4wmDyb/R+EQNk8Pw7VeG3wrQ7Bi9KYfpB9XZqGFw9oXQF4KZk3/ubAy4ATbFQfHGVDZwJmqYHDWEGoKZkxrCKZWeg8h4+kI4IPCWWNM61HTzaWNyHJDu5tUpz6ekhDNRw/Cc4qB407MNnIkaJkdfCH0hmDnpC+GUSl/whTDU4Vf4xqcFOX0CQ6JGIkeiJ1fIQVoYjNTXRA3CQRjMi4pqbJ3jCyEBxAg2rUONT2BI1EjkmGp1lXjSwuCkviZqEA7CUEN4o6ARjESnc2p8AkOiRiIHafEo56SF4UF9TdQgHIShhlBDeHeGaEDNcNGAPso5aWF4kF6JGoSDMNQQagg1BNoi8ScVIgX+PlVDMCo+3+lvCAf0ouFKfFKYHAcgX/oq6WnAk16JGoSDMPSF0BdCXwi0RX0hCIX2r/SFcEBz+rRJfFKYHAcgX/oq6WnAk16JGoSDMHypFwKR3RCcGpI63+BKNQyXqeYJDIRzipHy/z2fcrkKzi0cpCu+EEjwqxAhouZ8gyvVMDinmicwEM4pRspfQ7AKHbtXQ3ihFy1KYsiphmnfFEcCA+GcYqT8NQSr0LF7NYQawrGJkbdrCK+FIhPe0ovaV0OoIdCMnDrfGnBaNAJ/FZxbOEiPGkINgWbk1PnWgNcQTrXn3aAaQg0hO1F/stUQ+pXhLoO1mZQ+bRJDTjUM3ymOBAbCOcVI+fujolXo2L2+EPpCODYx8nYN4Zu+EOR8fHiNhsd8ol0lx1QP4jHNn4qnnmzxmOKgeKPXFlfCQlwMzvELgUCacwJKRJ9qXCWH4fvRHeIxzZ+Kp55s8ZjioHij1xZXwkJcDM4awguVSTASnBpmzgmDybFxh7TY4jHFQfFGyy2uhIW4GJw1hBoCzdnN88TwnSr8JmiKg+INRrNoJs/0DnExOGsINYRTc5gYvlOFawjvypboSQ2hhnBqLxPDd6pwDaGGQMPXHxUTq3UsB/XEPE+PVbx9e4qD4g3GLa6EhbgYnH0h9IVAc9bfEEAhs2inRD4YdAlDSIhBRIwuCRymzvQOcTU8KAdh3KhBGFKvOqpDXKdaUv2/54SD8iRwGgzjF4IpchWyhGPjnBpr9KQcxGOjBmGoIRiFnu9Me270frpTQzjWl/FtauzGsm7UMEIRDtLqKjUSOCjHhhY1BOrCHc6psbQkv5r248cI2UYNA5BwTHmaT8VEjQRXypHASXrXEKgLdzinxqqm1RB0Z0hP6ocuBBcJB9VJ4DQY+pWBOhE+p8aqptUQdFdIT+qHLlRD+K0ACW4ETTQlgcNgnd4hroYH5SCMGzUIg5mdKc+tGgmulGNDi35loC7c4Zwau7GsGzWMdISDtLpKjQQOyrGhhTIEAmrOiUxiMBI5iEuiBuUgDFvn1DPCYXhSjUSOBE7KQTwo3pwbLUweuoO/IVACc06CEVmK33oabuA0em7cMZp/hIO0+vVpBL+FJHKQVqYG5SAeFG/OEzhNnRqCUenPHWqKGQzKcQDOXa8aLjWE3wpMtTKN3JqbGoLpRg3hgEq/r5oBpkVK5CDgpgblIB4Ub84TOE2dGoJRqYZwQKUawmGxREAN4YVIxoFJMJOD+pKoQTkIw9b5VC/Dk2okcpBepgblIB4Ub84TOE2dvhCMSn0hHFCpL4TDYomAGkJfCGJM7ndl+qlnBphqJHKQQqYG5SAeFG/OEzhNnb4QjEp9IRxQqS+Ew2KJgBrCwRcCaWoEJac3OQhH4nwDJ9UgHgmtDIZEHeJicFAOwkk1KP6pfiTHT1OJ2ML5FCjFG3iGJtUxOQyW6Z0NnFSDOCS0MhgSdYiLwUE5CCfVoPgaAnXgzfmWoAdhnbqeGB4qTDUo3uhNOQyGRJ0EDspBOIkrxdcQqAM1hIMKvb5OA0rJzQBTDoMhUSeBg3IQTuJK8TUE6kAN4aBCNYT3BKNlNULTQlMNiq8hmC68uLMl6EFYp64nhocKUw2KN3pTDoMhUSeBg3IQTuJK8TUE6kBfCAcV6guhLwTxry6PpupP8NT9KN5g3HJYg2V6h/QwXAkD1aD4LQyJOsRlqsVTfsJJNSh+7YWQADoV3IgxrfFQTRv+m4qklTmnntDcJPRO5CAesUUb9szgNH2jO/g3FamxCaBXqPGdhouGwpxT36mnCb0TOYhHDeHNNFBjjaA0YFeo8Z2Gi/phzqnv1NOE3okcxKOGUEN4dx9oyB9luMzC0x3iSlolljmRg3jUEGoINQRyg8CPZIllTuSoIbxudn9DeKEHDQd96lH8VT5txL7jFeJKWiWWOZGDeFylZwYnNk1cqCHUEMSY/HuFBrSG8OaTt3/K4OeMhoeGz1SiGt/p08boRXeoJxt6f6eekd7UL3s+fiHYQh/d2yKbwPoIOWgZE3pTDaMT4TA1KAfhMDUohzknnBs4CMOvr0f07yFcBagRvXd+K0A9M4NBWlINik98upschCPBg2oYnBs4TN9rCKabD3aHhssMBlGmGhSfWpIplwSPLa6mzvQlXkOYqnzBeBry6RKZV4iRhXAQD2MqhMPUoBzmPMHV1KkhTFX6gvE05DScRhKqYXIQDlODchAOU4NymHPCuYGDMPwy+v6GYNr5WHdouMxgEGOqQfHm093UmHIxNQwXukM4N3AQhhoCdfFBz2m4zGAQdapB8TWE1wol9CTNTd/7QiAVH/CchssMBtGmGhRfQ6ghvDsjiQE1A/hd7tCyJvSmGkZrwmFqUA7CYWpQDnNOODdwEIZv9ZXBCG4EM82/9x3ikuBBNe7N0eZPcLW13ruX0CrBg3CYGt/mKwOJZZ6w08FJxRMX03jCQjUofus8wXWKNaFVggfhMDVqCC+mwQg2HZ5EfKLxhINqUPzW+RV6ltAqwYNwmBo1hBrCzd2l4dpaeKpjhpxyTM8TWiV4EA5To4ZQQ6ghDB2BFtGkN8tKeQiHqVFDqCHUEGjT4JwW0aQ3y0p5CIepUUOoIdQQaNNqCM8KkOsMtfwVbpxrWsfw2MAx5fEUT1wSPKhGgkciR4LrFEdCqwQPwmFqjF8Iqgj881GUg4imTIXqJHBOhy/FlXBMtaD8qfMpTorf0julxzRPDeGFgjQcNYRnsUiL6WDa+I2eXYWr1WRyr4ZQQzj1G8JVlqSGMFn/f2NrCDWEGgLs1FXML7v6t7PVEGoINYQawv8VqCHUEGoINYQawq0Z2Pg+mnj2bTxhp1okeJocU5wU3z9leNMFEswM5zQHxaeaRnWIK8WbATd3CIfJQXeIywYGwvh0PsVJ8anZMlyucKdfGfqVoV8Z+pVh9ysDOR+5tPk0ohyEIfFJYDAQl0QOw5XuGByUo+fPCiT6PtWTMPx6cU3/1WVThIjQ8JkalIMw1BBeK5TQ02j+Xe7QDG/oTRhqCG+m0Qj20QCbplKNRI7EkhkciTrfJUei71OtCEMNoYbw7ozVEKbr9zqelnFDb8JQQ6gh1BCye/9uNlrGGsIL6UgMEvOXs8F/UWn6bur0K4NRsnfeKkCzlZhfUp0w9IXQF0JfCLRFoXNaxhpCXwg3R80MBg1XYoYNjkSd75KDerahN2FQL4Tv0jDD8zJNC3w9Ir5meKZfnxIYqCdTHoTxKl9XDU5zB/8egknyXe7Q8CV0MAN8FRw1hN8KJPph+p6YL8pRQyCFDny1OZDq3atmMBIDSFgNjhpCDYHm6EufX2URr4KjhlBD+NILT+SusohXwVFDqCHQznzp86ss4lVw1BBqCF964YncVRbxKjhqCDUE2pkvfX6VRbwKjhrCNzSEjeG7iovQL+ukBcVv8SScWzioDumV4JGokchBWtA5YaB4e45/7JhoigXz2fdIdNKC4rf4Ec4tHFSH9ErwSNRI5CAt6JwwULw9ryG8UIpEpwGleNuU6T3COc2fiie9EjwSNRI5ppoRhmn+v/E1hBpCapYO56EhryE8S0paHRb/nYAaQg0hNUuH89CQ1xBqCIeHKhkwHVCKT2L9KFdikTawkl4JHokaiRxTPQnDNH+/MtxQkESnAaX4VNMoD+Gk+K1z0ivBI1EjkWOqKWGY5q8h1BBSM3Q6Dw15DaFfGU4PVyJwOqAUn8BociQWydSZ3iG9EjwSNRI57q3VNH/shUBipYBO85jhIi4mB+GkGhT/dD7FkcBgcE7vTHk+1d/ganBOcWzU+DVbV/g/apkOjolPCGpyEJbpYNQQSOHX5wm9qaKZiymOjRo1hDedpqaZptDwUA2KryEYhXa/e5u5mPZ9o0YNoYZwbLuWb5slIEjTRaT81qCnOIwW0xo1hBqCmfdPu2OWgMAlloRqGJxTHBs1agg1BJr1Tz03S0AAp4tI+ftCOLhERtCNO2a4aHhMDuJCNSjeDuBHeRIYDM7pnavoTTwMzqnmGzX6QjhobqYpNDzTwaghkMKvzxN6U0UzF1McGzXWDMGQIdHpnAQ3GCgHYUicG5zTOoYn4aAcFP/EIZFjqsVV4hNaUA7DdeXvIZjhMGAnz2CDISHolIfBOa1heBIOykHxNYRjL5mEnmZuaggvVKIhN4JO75jGT2sYnoSDclB8DaGGMJ3jD+M3BvSuBP4kN4s0xUFamd8pKIfhkcgx1eIq8QktKIfh2hdCXwg354QWmoaP4vtC6AvBGNTpOxsDehrcgUCzSAfS3bxKWvWFMFX4eDz1xMwF5TCo+kLoC6EvBLMpd75Dy1xDONiAqwh6EPY/103jpzVIq74Qpgofj6eemLmgHAZVXwh9IfSFYDblzndomWsIBxtwFUEJNjWWeFD+rXPisYVjWmdL76leBifVUDk2/oEUAjpt6lM8kTUYKEcCJ+HYwLDBI1FjI8eW3tR34mpwUg2Vo4bw3AojGDWOzhNNoxob58RjA0OixkbPzW8yxMXgpJ6oHDWEGgIN461zGr4zOT8jxixJAtdUL4OTaqgcNYQawpmBp+E7k/MzYsySJHBN9TI4qYbKUUOoIZwZeBq+Mzk/I8YsSQLXVC+Dk2qoHDWEGsKZgafhO5PzM2LMkiRwTfUyOKmGylFDqCGcGXgavjM5PyPGLEkC11Qvg5NqqBw1hJwhUEMSg2VymMZTng0uhHMDA+nwSOekp+HSv6n4QqWpoFcZ4CmPJ0k2uBDODQxmSR7lDulpeNQQagg352RjGWmANzCYJXmUO6Sn4VFDqCHUEMymPMCdGsKBZTafNlNBTY2NuZry6FeGjS7la0T63h8V+6PirdHcMDca4A0M+bX8vIykp0HWrwwHXhkk6FUGODIYP34Q3fE54byKnmOiSwlITwOjhlBD6G8IZlMe4M7DGMIVtDSfNiSoybHBlXAmMBDXBIaNGqQFYaD4p3OjxbROoobKsfEbghH13ndMQ0gwk+PePOwATnEQV9LK1N+oQTgIA8XbfkzrGL2phspRQ/A/KpLgZngSd0xjp3WIawLDRg3SgTBQfA3hjUKJwTCiT++YxhMXk2OK08QTTpOD7hDXBIaNGlOeFF9DqCGYGbnrncQyEsCNZd2oMeVJ8TWEGoKZkbveqSHk5CVTMpVMP6Z1EjVUjv6G0N8Qbg09DbAZLlqmjRpTDBTfF0JfCGZG7nonsYwEcGNZN2pMeVJ8DaGGYGbkrndqCDl5yZRMJdOPaZ1EDZVj+pXBCPYod0iwaVPNp4mpQTivoHeCRyIHaWFqUA5zTj0jHBRvMJg747+6bIo8yh0SnZpmeCZqUA6D4953jFbEI5GDeJoalMOcT7lSvMFg7tQQXqhEoieGJ1GDcpjG3/uO0Yp4JHIQT1ODcpjzKVeKNxjMnRpCDcHMyeE7ZtFoyBM5CLipQTnM+ZQrxRsM5k4NoYZg5uTwHbNoNOSJHATc1KAc5nzKleINBnOnhlBDMHNy+I5ZNBryRA4CbmpQDnM+5UrxBoO5U0OoIZg5OXzHLBoNeSIHATc1KIc5n3KleIPB3Kkh1BDMnBy+YxaNhjyRg4CbGpTDnE+5UrzBYO6gIZgkvVMFqsDXUKCG8DX6WBZVIKJADSEiY5NUga+hQA3ha/SxLKpARIEaQkTGJqkCX0OBGsLX6GNZVIGIAjWEiIxNUgW+hgI1hK/Rx7KoAhEFaggRGZukCnwNBf4HQ0ZobGansRIAAAAASUVORK5CYII=
// @description  新版12306、QQ、支付宝、淘宝、京东、百度云盘等网站默认使用账号密码登录，不出现二维码登录界面,可自定义设置在指定网站开启和关闭，有需求或问题请反馈。
// @author       Eva
// @match        *://kyfw.12306.cn/*
// @match        *://login.taobao.com/*
// @match        *://passport.jd.com/*
// @match        *://*.baidu.com/*
// @match        *://*.douban.com/*
// @match        *://passport.suning.com/*
// @match        *://*.zhihu.com/*
// @match        *://*.alipay.com/*
// @match        *://account.aliyun.com/*
// @match        *://*.qq.com/*
// @match        *://*.weiyun.com/*
// @match        *://exmail.qq.com/*
// @match        *://*.cloud.tencent.com/*
// @match        *://*.pay.weixin.qq.com/*
// @match        *://*.qcloud.com/*
// @match        *://mail.163.com/*
// @match        *://mail.126.com/*
// @match        *://www.iqiyi.com/*
// @match        *://www.acfun.cn/*
// @match        *://music.163.com/*
// @match        *://*.xiami.com/*
// @match        *://*.douyu.com/*
// @match        *://*.huya.com/*
// @match        *://*.smzdm.com/*
// @match        *://ipassport.kaola.com/*
// @match        *://*.js.10086.cn/*
// @match        *://*.e.189.cn/*
// @match        *://login.189.cn/*
// @match        *://js.189.cn/*
// @match        *://passport.58.com/*
// @match        *://passport.csdn.net/*
// @match        *://account.dianping.com/*
// @match        *://etax.chinatax.gov.cn/*
// @match        *://*.115.com/*
// @match        *://*.tianya.cn/*
// @match        *://*.dnspod.cn/*
// @match        *://www.qcc.com/*
// @match        *://mms.pinduoduo.com/*
// @match        *://*.tyrz.gd.gov.cn/*
// @match        *://*.baixing.com/*
// @match        *://*.sl56.com/*
// @match        *://*.passport.sangon.com/*
// @match        *://*.passport.21cnjy.com/*
// @match        *://login.xueanquan.com/*
// @grant        unsafeWindow
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM.deleteValue
// @grant        GM_registerMenuCommand
// @require      https://cdn.jsdelivr.net/npm/jquery@3.5.0/dist/jquery.min.js
// @run-at 		 document-end
// ==/UserScript==

(function () {
    'use strict';

    // 注册菜单
    GM_registerMenuCommand("拒绝二维码登录开关设置", startSettings);

    var settingData = [
        { 'name': '12306', 'url': 'kyfw.12306.cn', 'enabled': true },
        { 'name': '淘宝', 'url': 'login.taobao.com', 'enabled': true },
        { 'name': '京东', 'url': 'passport.jd.com', 'enabled': true },
        { 'name': '百度', 'url': 'baidu.com', 'enabled': true },
        { 'name': '豆瓣', 'url': 'douban.com', 'enabled': true },
        { 'name': '苏宁易购', 'url': 'passport.suning.com', 'enabled': true },
        { 'name': '知乎', 'url': 'zhihu.com', 'enabled': true },
        { 'name': '支付宝', 'url': 'alipay.com', 'enabled': true },
        { 'name': '阿里云', 'url': 'account.aliyun.com', 'enabled': true },
        {
            'name': '腾讯QQ',
            'url': ['xui.ptlogin2.qq.com', 'ssl.xui.ptlogin2.qq.com', 'ui.ptlogin2.qq.com'],
            'enabled': true
        },
        {
            'name': '网易邮箱',
            'url': ['mail.163.com', 'mail.126.com'],
            'enabled': true
        },
        { 'name': '微云', 'url': 'weiyun.com', 'enabled': true },
        { 'name': '腾讯云', 'url': ['cloud.tencent.com', 'qcloud.com'], 'enabled': true },
        { 'name': '腾讯企业邮箱', 'url': 'exmail.qq.com', 'enabled': true },
        { 'name': '微信支付', 'url': 'pay.weixin.qq.com', 'enabled': true },
        { 'name': '爱奇艺', 'url': 'iqiyi.com', 'enabled': true },
        { 'name': 'AcFun', 'url': 'www.acfun.cn', 'enabled': true },
        { 'name': '网易云音乐', 'url': 'music.163.com', 'enabled': true },
        { 'name': '虾米音乐', 'url': 'xiami.com', 'enabled': true },
        { 'name': '斗鱼', 'url': 'douyu.com', 'enabled': true },
        { 'name': '虎牙直播', 'url': 'huya.com', 'enabled': true },
        { 'name': '什么值得买', 'url': 'smzdm.com', 'enabled': true },
        { 'name': '考拉海购', 'url': 'ipassport.kaola.com', 'enabled': true },
        { 'name': '江苏移动', 'url': 'js.10086.cn', 'enabled': true },
        { 'name': '天翼云盘', 'url': 'e.189.cn', 'enabled': true },
        { 'name': '中国电信', 'url': 'login.189.cn', 'enabled': true },
        { 'name': '江苏电信', 'url': 'js.189.cn', 'enabled': true },
        { 'name': '58同城', 'url': 'passport.58.com', 'enabled': true },
        { 'name': 'CSDN', 'url': 'passport.csdn.net', 'enabled': true },
        { 'name': '大众点评', 'url': 'account.dianping.com', 'enabled': true },
        { 'name': '自然人电子税务局', 'url': 'etax.chinatax.gov.cn', 'enabled': true },
        { 'name': '115云', 'url': '115.com', 'enabled': true },
        { 'name': '天涯社区', 'url': 'tianya.cn', 'enabled': true },
        { 'name': 'DNSPod', 'url': 'dnspod.cn', 'enabled': true },
        { 'name': '企查查', 'url': 'www.qcc.com', 'enabled': true },
        { 'name': '拼多多商家', 'url': 'mms.pinduoduo.com', 'enabled': true },
        { 'name': '广东省统一身份认证平台', 'url': 'tyrz.gd.gov.cn', 'enabled': true },
        { 'name': '百姓网', 'url': 'baixing.com', 'enabled': true },
        { 'name': '升蓝物流', 'url': 'sl56.com', 'enabled': true },
        { 'name': '生工', 'url': 'passport.sangon.com', 'enabled': true },
        { 'name': '21世纪教育', 'url': 'passport.21cnjy.com', 'enabled': true },
        { 'name': '学校安全教育平台', 'url': 'login.xueanquan.com', 'enabled': true }
    ];

    // 更新设置
    var storageData = getStorageData();
    if (storageData) {
        // 同步最新支持列表到本地存储的设置数据
        var needUpate = false;
        var missingData = [];
        $.each(settingData, function (i, item) {
            var matchCount = 0;
            $.each(storageData, function (r, data) {
                if (item.name == data.name) {
                    matchCount++;
                    if (item.url.toString() != data.url.toString()) {
                        console.log("变更数据", data.url, "为", item.url);
                        data.url = item.url;
                        needUpate = true;
                    }
                }
            });
            if (matchCount == 0) missingData.push(item)
        });
        if (missingData.length > 0) {
            console.log("更新数据", missingData);
            $.merge(storageData, missingData);
            needUpate = true;
        }
    } else {
        // 初始化浏览器本地存储的设置数据
        storageData = settingData;
        console.log("初始化数据", storageData);
        needUpate = true;
    }
    if (needUpate) setStorageData(storageData);

    function Settings() {
        this.mask = $('<div></div>');
        this.ele = $('<div></div>');
        this.init();
    }

    Settings.prototype = {
        init: function () {
            var self = this;
            self.mask.attr('id', 'settingLayerMask');
            self.ele.attr('id', 'settingLayer');
            self.addContent();
            self.addGlobalStyle();
            self.mask.append(self.ele);
            $('body').append(self.mask);
            self.mask.on('click', function () {
                self.hide();
            });
            self.ele.on('click', function (e) {
                self.bindClick(e);
                e.stopPropagation();
            });
            $(document).keyup(function (e) {
                if (e.key === "Escape") {
                    self.hide();
                }
            });
        },
        addContent: function () {
            // 各网站开关
            var itemList = $('<div id="itemlist"></div>');
            $.each(storageData, function (i, item) {
                var itemDiv = $('<section class="switch"></section>');
                var checkDiv = $('<div class="checkbox"></div>');
                if (item.enabled) checkDiv.addClass('on')
                itemDiv.append($('<span></span>').text(item.name)).append(checkDiv.append($('<input type="checkbox" />').attr('name', item.name)).append($('<label class="switchLabel"></label>')));
                itemList.append(itemDiv);
            });
            // 按钮（反馈、保存等）
            var btnEle = $('<div id="btnEle"></div>');
            // Greasyfork 反馈按钮
            var feedbackGreasyforkEle = $('<span class="feedback"></span>').append($('<a target="_blank" href="https://greasyfork.org/zh-CN/scripts/37988-%E6%8B%92%E7%BB%9D%E4%BA%8C%E7%BB%B4%E7%A0%81%E7%99%BB%E5%BD%95">反馈greasyfork</a>'));
            // GitHub 反馈按钮
            var feedbackGitHubEle = $('<span class="feedback"></span>').append($('<a target="_blank" href="https://github.com/mmxxooyy/NoQRCodeLogin">反馈 GitHub</a>'));
            // 保存按钮
            var saveEle = $('<span id="noqrlogin-save" title="save &amp; close">保存并关闭</span>');
            // 关闭按钮
            var closeEle = $('<span id="noqrlogin-close" title="close 关闭"></span>');
            this.ele.append(itemList).append(btnEle.append($('<div class="btnEleLayer"></div>').append(feedbackGreasyforkEle).append(feedbackGitHubEle).append(saveEle))).append(closeEle);
        },
        show: function () {
            var self = this;
            setTimeout(function () {
                self.mask.css('display', 'flex');
            }, 30);
        },
        hide: function () {
            var self = this;
            setTimeout(function () {
                self.mask.css('display', 'none');
            }, 100);
        },
        addGlobalStyle: function () {
            var globalStyle = ' /* 开关按钮 */\n' +
                '        #itemlist {\n' +
                '            display: flex;\n' +
                '            display: -webkit-flex;\n' +
                '            align-content: center;\n' +
                '            align-items: center;\n' +
                '            justify-content: center;\n' +
                '            flex-flow: row wrap;\n' +
                '        }\n' +
                '\n' +
                '        section {\n' +
                '            float: left;\n' +
                '            width: 200px;\n' +
                '            padding: 6px 20px;\n' +
                '        }\n' +
                '\n' +
                '        .switch span {\n' +
                '            height: 30px;\n' +
                '            line-height: 30px;\n' +
                '            font-size: 20px;\n' +
                '            vertical-align: top;\n' +
                '        }\n' +
                '\n' +
                '        .switch .checkbox {\n' +
                '            float: right;\n' +
                '        }\n' +
                '\n' +
                '        .checkbox {\n' +
                '            position: relative;\n' +
                '            display: inline-block;\n' +
                '        }\n' +
                '\n' +
                '        .checkbox:after,\n' +
                '        .checkbox:before {\n' +
                '            -webkit-font-feature-settings: normal;\n' +
                '            -moz-font-feature-settings: normal;\n' +
                '            font-feature-settings: normal;\n' +
                '            -webkit-font-kerning: auto;\n' +
                '            font-kerning: auto;\n' +
                '            -moz-font-language-override: normal;\n' +
                '            font-language-override: normal;\n' +
                '            font-stretch: normal;\n' +
                '            font-style: normal;\n' +
                '            font-synthesis: weight style;\n' +
                '            font-variant: normal;\n' +
                '            font-weight: normal;\n' +
                '            text-rendering: auto;\n' +
                '        }\n' +
                '\n' +
                '        .checkbox label {\n' +
                '            width: 80px;\n' +
                '            height: 30px;\n' +
                '            background: #ccc;\n' +
                '            position: relative;\n' +
                '            display: inline-block;\n' +
                '            border-radius: 46px;\n' +
                '            -webkit-transition: 0.4s;\n' +
                '            transition: 0.4s;\n' +
                '            cursor: pointer;\n' +
                '        }\n' +
                '\n' +
                '        .checkbox label:after {\n' +
                '            content: \'\';\n' +
                '            position: absolute;\n' +
                '            width: 50px;\n' +
                '            height: 50px;\n' +
                '            border-radius: 100%;\n' +
                '            left: 0;\n' +
                '            top: -5px;\n' +
                '            z-index: 2;\n' +
                '            background: #fff;\n' +
                '            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n' +
                '            -webkit-transition: 0.4s;\n' +
                '            transition: 0.4s;\n' +
                '            cursor: pointer;\n' +
                '        }\n' +
                '\n' +
                '        .checkbox input {\n' +
                '            display: none;\n' +
                '        }\n' +
                '\n' +
                '        .checkbox.on label:after {\n' +
                '            left: 40px;\n' +
                '        }\n' +
                '\n' +
                '        .checkbox.on label {\n' +
                '            background: #4BD865;\n' +
                '        }\n' +
                '\n' +
                '        .switch .checkbox label {\n' +
                '            width: 70px;\n' +
                '        }\n' +
                '\n' +
                '        .switch .checkbox label:after {\n' +
                '            top: 0;\n' +
                '            width: 30px;\n' +
                '            height: 30px;\n' +
                '        }\n' +
                '\n' +
                '        /* 弹出层 */\n' +
                '        #settingLayerMask {\n' +
                '            display: none;\n' +
                '            justify-content: center;\n' +
                '            align-items: center;\n' +
                '            position: fixed;\n' +
                '            top: 0;\n' +
                '            right: 0;\n' +
                '            bottom: 0;\n' +
                '            left: 0;\n' +
                '            background-color: rgba(0, 0, 0, .5);\n' +
                '            z-index: 200000000;\n' +
                '            overflow: auto;\n' +
                '            font-family: arial, sans-serif;\n' +
                '            min-height: 100%;\n' +
                '            font-size: 16px;\n' +
                '            transition: 0.5s;\n' +
                '            opacity: 1;\n' +
                '            user-select: none;\n' +
                '            -moz-user-select: none;\n' +
                '            padding-bottom: 80px;\n' +
                '            box-sizing: border-box;\n' +
                '        }\n' +
                '\n' +
                '        #settingLayer {\n' +
                '            display: flex;\n' +
                '            flex-wrap: wrap;\n' +
                '            padding: 20px;\n' +
                '            margin: 0px 25px 50px 5px;\n' +
                '            background-color: #fff;\n' +
                '            border-radius: 4px;\n' +
                '            position: absolute;\n' +
                '            width: 60%;\n' +
                '            transition: 0.5s;\n' +
                '        }\n' +
                '\n' +
                '\n' +
                '        #btnEle {\n' +
                '            position: absolute;\n' +
                '            width: 100%;\n' +
                '            bottom: 4px;\n' +
                '            right: 0;\n' +
                '            background: #fff;\n' +
                '            border-radius: 4px;\n' +
                '        }\n' +
                '\n' +
                '        #btnEle span {\n' +
                '            display: inline-block;\n' +
                '            background: #EFF4F8;\n' +
                '            border: 1px solid #3abdc1;\n' +
                '            margin: 12px auto 10px;\n' +
                '            color: #3abdc1;\n' +
                '            padding: 5px 10px;\n' +
                '            border-radius: 4px;\n' +
                '            cursor: pointer;\n' +
                '            outline: none;\n' +
                '            transition: 0.3s;\n' +
                '        }\n' +
                '\n' +
                '        #btnEle a {\n' +
                '            color: #999;\n' +
                '            text-decoration: none;\n' +
                '        }\n' +
                '\n' +
                '        #btnEle a:hover {\n' +
                '            text-decoration: underline;\n' +
                '            color: #ef8957;\n' +
                '        }\n' +
                '\n' +
                '        #btnEle span.feedback:hover {\n' +
                '            border-color: #ef8957;\n' +
                '        }\n' +
                '\n' +
                '        #btnEle span:not(.feedback):hover {\n' +
                '            background: #3ACBDD;\n' +
                '            color: #fff;\n' +
                '        }\n' +
                '\n' +
                '        #btnEle .feedback {\n' +
                '            border-color: #aaa;\n' +
                '        }\n' +
                '\n' +
                '        #btnEle>div {\n' +
                '            width: 100%;\n' +
                '            margin-bottom: -100%;\n' +
                '            display: flex;\n' +
                '            justify-content: space-around;\n' +
                '            background: #EFF4F8;\n' +
                '            border-radius: 4px;\n' +
                '        }\n' +
                '\n' +
                '        /*close button*/\n' +
                '        #noqrlogin-close {\n' +
                '            background: white;\n' +
                '            color: #3ABDC1;\n' +
                '            line-height: 20px;\n' +
                '            text-align: center;\n' +
                '            height: 20px;\n' +
                '            width: 20px;\n' +
                '            font-size: 20px;\n' +
                '            padding: 10px;\n' +
                '            border: 3px solid #3ABDC1;\n' +
                '            border-radius: 50%;\n' +
                '            transition: .5s;\n' +
                '            top: -20px;\n' +
                '            right: -20px;\n' +
                '            position: absolute;\n' +
                '            cursor: pointer;\n' +
                '        }\n' +
                '\n' +
                '        #noqrlogin-close::before {\n' +
                '            content: \'\\2716\';\n' +
                '        }\n' +
                '\n' +
                '        #noqrlogin-close:hover {\n' +
                '            background: indianred;\n' +
                '            border-color: indianred;\n' +
                '            color: #fff;\n' +
                '        }';
            $("<style></style>").text(globalStyle).appendTo($("head"));
        },
        bindClick: function (e) {
            var self = this;
            var targetClass = e.target.className;
            var targetid = e.target.id;

            // 关闭按钮
            if (targetid == 'noqrlogin-close') {
                self.hide();
            }

            // 保存设置
            if (targetid == 'noqrlogin-save') {
                $('section.switch input').each(function (i, o) {
                    $.each(storageData, function (j, d) {
                        if (d.name == o.name) d.enabled = $(o.closest('.checkbox')).hasClass('on')
                    })
                });
                //console.log(storageData);
                setStorageData(storageData);
                self.hide();
            }

            // 切换开关
            if (targetClass == 'switchLabel') {
                var switchEle = $(e.target).closest('.checkbox');
                if (switchEle.hasClass('on')) {
                    switchEle.removeClass('on');
                } else {
                    switchEle.addClass('on');
                }
            }
        }
    };

    function startSettings() {
        var settings = new Settings();
        settings.show();
    }


    // 处理业务
    $.each(storageData, function (r, data) {
        if ($.isArray(data.url)) {
            $.each(data.url, function (i, u) {
                check(u, data.enabled)
            });
        } else {
            check(data.url, data.enabled)
        }
    });

    function check(url, enabled) {
        if (matchURL(url) && enabled) {
            process(url);
            return false;
        }
    }

    function process(url) {
        console.log("网址匹配,可切换二维码登录：", url);
        switch (url) {
            // 12306
            case 'kyfw.12306.cn':
                var auto = setInterval(function () {
                    if ($('#J-login-code-loading').css('display') === 'none' && $('.login-hd-code').hasClass('active')) {
                        $('.login-hd-account a')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 淘宝
            case 'login.taobao.com':
                var auto = setInterval(function () {
                    if ($('#J_StaticForm').css('display') === 'none') {
                        $('#J_Quick2Static').click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 京东
            case 'passport.jd.com':
                var auto = setInterval(function () {
                    if ($('.login-box').css('display') === 'none') {
                        $('.login-tab-r').click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 百度
            case 'baidu.com':
                $('body').bind('DOMNodeInserted', function (e) {
                    var e_chilren = $(e.target).find('[id^=TANGRAM__PSP_][id$=__footerULoginBtn]');
                    if (e_chilren.length > 0) {
                        setTimeout(function () {
                            e_chilren.trigger("click");
                        }, 100);
                    }
                });
                break;
            // 豆瓣
            case 'douban.com':
                var auto = setInterval(function () {
                    if ($('.account-tab-phone').hasClass('on')) {
                        $('.account-tab-account')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 苏宁易购
            case 'passport.suning.com':
                var auto = setInterval(function () {
                    if ($('.pc-login').css('display') === 'none') {
                        $('.tab-item')[1].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 知乎
            case 'zhihu.com':
                $('body').bind('DOMNodeInserted', function (e) {
                    if ($(e.target).find('.Login-content').length > 0) {
                        var auto = setInterval(function () {
                            if ($('.SignFlow-tabs .SignFlow-tab').length > 1 && !$('.SignFlow-tabs .SignFlow-tab').filter(function () { return $(this).text() == "密码登录"; }).hasClass('SignFlow-tab--active')) {
                                $('.SignFlow-tabs .SignFlow-tab').filter(function () { return $(this).text() == "密码登录"; })[0].click();
                                clearInterval(auto);
                            }
                        }, 50);
                    }
                });
                break;
            // 支付宝
            case 'alipay.com':
                if (matchURL('excashier.alipay.com')) {
                    var auto = setInterval(function () {
                        if ($('#J_tip_qr').css('display') === 'block') {
                            setTimeout(function () {
                                $('a[seed="J_tip_qr-switchTipBtn"]')[0].click();
                            }, 100);
                            clearInterval(auto);
                        }
                    }, 50);
                } else {
                    var auto = setInterval(function () {
                        var changeTabs = $('#J-loginMethod-tabs li');
                        var qrCode = $('#J-qrcode');
                        var ssoLogin = $('#J-ssoLogin');
                        var loginForm = $('#J-login');
                        var loginFormMethod = $('#J-loginFormMethod');
                        var popbox = $('#J_popbox');
                        if (popbox.hasClass('stat-login')) {
                            var iframe = $('#J_loginIframe');
                            if (iframe) {
                                var contentWindow = iframe[0].contentWindow;
                                if (contentWindow) {
                                    var loginMethod = contentWindow.document.getElementById('J-loginFormMethod');
                                    if (loginMethod) {
                                        contentWindow.document.getElementById('J-qrcode-target').click();
                                        clearInterval(auto);
                                    }
                                }
                            }
                        }
                        if (changeTabs.length >= 2) {
                            changeTabs.each(function (index, element) {
                                var self = $(this);
                                if ((self.attr('data-status') === 'show_login') && (!self.hasClass("active"))) {
                                    loginFormMethod.val('');
                                    qrCode.addClass('fn-hide');
                                    if (window.light && window.light.page && window.light.page.products && window.light.page.products.barcode) {
                                        window.light.page.products.barcode.onready(function () {
                                            this.stop();
                                        });
                                    }
                                    if (ssoLogin.attr('data-hide') === 'false' && ssoLogin.attr('data-state') === 'finished') {
                                        ssoLogin.removeClass('fn-hide');
                                    } else {
                                        loginForm.removeClass('fn-hide');
                                    }
                                    self.addClass("active");
                                    self.siblings().removeClass('active');
                                    clearInterval(auto);
                                }
                            });
                        }
                    }, 50);
                }
                break;
            // 阿里云
            case 'account.aliyun.com':
                var auto = setInterval(function () {
                    if ($('.ability-tabs-item[data-spm-click$="locaid=qrcode"]').hasClass('active')) {
                        $('.ability-tabs-item[data-spm-click$="locaid=login"]')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                if ($('#alibaba-login-iframe').length > 0) {
                    var config = miniLoginEmbedder.config;
                    config.iframeUrl = config.iframeUrl.replace('passport.aliyun.com', 'passport.alibaba.com');
                    config.notLoadSsoView = '';
                    miniLoginEmbedder.init(config);
                    var timer = setInterval(function () {
                        if ($('#alibaba-login-iframe iframe').length > 1) {
                            $($('#alibaba-login-iframe iframe')[0]).width(0).height(0);
                            clearInterval(timer);
                        }
                    }, 50);
                }
                break;
            // 腾讯QQ
            case 'xui.ptlogin2.qq.com':
            case 'ssl.xui.ptlogin2.qq.com':
            case 'ui.ptlogin2.qq.com':
                var auto = setInterval(function () {
                    if ($('#qrlogin_img').attr('src')) {
                        $('#switcher_plogin')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 微云
            case 'weiyun.com':
                var auto = setInterval(function () {
                    if ($('.face').length == 1 && $('#bottom_qlogin').css('display') === 'block') {
                        $('#switcher_plogin')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 腾讯云
            case 'cloud.tencent.com':
            case 'qcloud.com':
                var timer = function () {
                    var auto = setInterval(function () {
                        if ($('.J-qcloginBox').css('display') === 'none') {
                            $('.J-btnSwitchLoginType[data-type="email"]')[0].click();
                            clearInterval(auto);
                        }
                    }, 50);
                }
                timer();
                $('body').bind('DOMNodeInserted', function (e) {
                    if ($(e.target).hasClass('J-commonLoginContent')) {
                        timer();
                    }
                });
                break;
            // 腾讯企业邮箱
            case 'exmail.qq.com':
                var auto = setInterval(function () {
                    if ($('.login_account_pwd_panel').css('display') === 'none') {
                        $('.js_show_pwd_panel')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 微信支付
            case 'pay.weixin.qq.com':
                var auto = setInterval(function () {
                    if ($('#IDSwitchWechatLogin').attr('class').includes('selected')) {
                        $('#IDSwitchAccountLogin')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 网易邮箱
            case 'mail.163.com':
            case 'mail.126.com':
                var auto = setInterval(function () {
                    if ($('#normalLoginTab').css('display') === 'none') {
                        $('#lbNormal')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 爱奇艺
            case 'iqiyi.com':
                $('body').bind('DOMNodeInserted', function (e) {
                    if ($(e.target).hasClass('login-frame-bottom')) {
                        var auto = setInterval(function () {
                            var loginFrame = $('.login-frame[data-loginele="codeLogin"]');
                            if (!loginFrame.hasClass('dn')) {
                                loginFrame.find('a[rseat="cmm_lgn"]')[0].click();
                                clearInterval(auto);
                            }
                        }, 50);
                    }
                });
                break;
            // AcFun
            case 'www.acfun.cn':
                var auto = setInterval(function () {
                    if (!$('#login').hasClass('login-account')) {
                        $('#login-switch').click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 网易云音乐
            case 'music.163.com':
                var process = function () {
                    var switchBtn = $('#otherbtn').find('a[data-action="switch"]');
                    if (switchBtn.length > 0) {
                        switchBtn[0].click();
                        $('#j-official-terms').prop("checked", true);
                    }
                }

                if ($('#login-qrcode').length > 0) {
                    var auto = setInterval(function () {
                        if ($('#otherbtn').length > 0) {
                            process();
                            clearInterval(auto);
                        }
                    }, 50);
                }

                $('body').bind('DOMNodeInserted', function (e) {
                    if ($(e.target).find('#login-qrcode').length > 0) {
                        if (!$('#login-qrcode').hasClass('f-hide')) {
                            process();
                        }
                    }
                });
                break;
            // 虾米音乐
            case 'xiami.com':
                $('.modal-wrapper').bind('DOMNodeInserted', function (e) {
                    var auto = setInterval(function () {
                        if ($('.modal').hasClass('opened') && !$('.login').hasClass('current')) {
                            $('.login')[0].click();
                            clearInterval(auto);
                        }
                    }, 50);
                });
                break;
            // 斗鱼
            case 'douyu.com':
                if ($('.scancode-login').length > 0 && $('.scancode-login').hasClass('status-scan')) {
                    setTimeout(function () {
                        $(".scanicon-toLogin")[0].click();
                    }, 100);
                    $(".inputLoginBtn").on('click', function () {
                        var nickname = $('.loginbox-login-subtype').find('[data-subtype="login-by-nickname"]');
                        if (nickname && !nickname.hasClass('active')) {
                            setTimeout(function () {
                                nickname[0].click();
                            }, 100);
                        }
                    })
                }
                break;
            // 虎牙直播
            case 'huya.com':
                var auto = setInterval(function () {
                    if ($('.account').hasClass('UDBSdkLgn-none')) {
                        $("img[src$='qrweb.png']").click();
                        $("img[src$='webqr.png']").on('click', function () {
                            clearInterval(auto);
                        })
                    }
                }, 50);
                break;
            // 58 同城
            case 'passport.58.com':
                var auto = setInterval(function () {
                    if ($('.change_qrcode').attr('type_attr') === 'pclogin') {
                        $('.change_qrcode span')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 什么值得买
            case 'smzdm.com':
                var auto = setInterval(function () {
                    if ($('.login').css('display') === 'none') {
                        $('.qrcode-change')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 考拉海购
            case 'ipassport.kaola.com':
                var auto = setInterval(function () {
                    if ($('.icon-sms').length > 0) {
                        $('.icon-sms')[0].click();
                        clearInterval(auto);
                    }
                }, 50);

                break;
            // 江苏移动
            case 'js.10086.cn':
                var tabs = $('.login-phone-way').find('.phone-tab');
                if (tabs.length > 0 && $(tabs[0]).hasClass('cur')) {
                    tabs[1].click();
                }
                break;
            // 天翼云盘
            case 'e.189.cn':
                var auto = setInterval(function () {
                    if ($('#J_change_type').length > 0 && $('#J_change_type').hasClass('icons-normal-login')) {
                        $('#J_change_type')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 中国电信
            case 'login.189.cn':
                var auto = setInterval(function () {
                    if ($('#divNormalLogin').css('display') === 'none') {
                        $('.QRCodeBoxSuperscrip')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 江苏电信
            case 'js.189.cn':
                if ($('.login_con.mobile').length > 0 && $('.login_con.mobile').css('display') === 'none') {
                    $('#menu1 li')[0].click();
                }
                break;
            // CSDN
            case 'passport.csdn.net':
                var auto = setInterval(function () {
                    if ($('.main-code').length > 0) {
                        $('.main-code').each(function () {
                            if (!$(this).hasClass('hide')) {
                                $('a:contains(账号密码登录)')[0].click();
                                clearInterval(auto);
                            }
                        })
                    }
                }, 50);
                break;
            // 大众点评
            case 'account.dianping.com':
                var auto = setInterval(function () {
                    if ($('.login-page').length > 0 && $('.qrcode-page').length > 0 && $('.login-page').css('display') === 'none') {
                        $('.qrcode-page').find('.icon-pc')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 自然人电子税务局
            case 'etax.chinatax.gov.cn':
                var auto = setInterval(function () {
                    if ($('.password-login-container').length > 0 && $('.password-login-container').css('display') === 'none') {
                        $('.login-mode-text:contains(密码登录)')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 115 云
            case '115.com':
                var auto = setInterval(function () {
                    if ($('.login-scene[lg_rel="login"]').css('display') === 'none') {
                        $('.login-scene').css('display', "none");
                        $('.login-scene[lg_rel="login"]').css('display', "block");
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 天涯社区
            case 'tianya.cn':
                var process = function () {
                    var auto = setInterval(function () {
                        if ($('#loginWin_content_wrapper').hasClass('loginWin-qrcode-login-wrapper')) {
                            $('.loginWin-tab .normal-login-tab')[0].click();
                            clearInterval(auto);
                        }
                    }, 50);
                }
                if ($('#loginWin_content_wrapper').length == 1) {
                    process();
                }
                $('#js_login').on('click', function () {
                    process();
                })
                break;
            // DNSPod
            case 'dnspod.cn':
                var auto = setInterval(function () {
                    if ($('a[href^="/login/email"]').length > 0 && !$('a[href^="/login/email"]').parent('.dp-login__tabitem').hasClass('is-active')) {
                        $('a[href^="/login/email"]')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
                break;
            // 企查查
            case 'www.qcc.com':
                var auto = setInterval(function () {
                    if ($('#normalLogin').length > 0 && !$('#normalLogin').hasClass('active')) {
                        $('#normalLogin')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 拼多多商家
            case 'mms.pinduoduo.com':
                var auto = setInterval(function () {
                    if ($('.password-section').length > 0 && $('.password-section').css('display') === 'none') {
                        $('.login-tab').find('.tab-item.last-item')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 广东省统一身份认证平台
            case 'tyrz.gd.gov.cn':
                var auto = setInterval(function () {
                    if ($('.qrcode').length > 0) {
                        $('a:contains(账号密码)')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 百姓网
            case 'baixing.com':
                var auto = setInterval(function () {
                    if ($('.login-window a[href="#appLogin"]').closest('li').hasClass('active')) {
                        $('.login-window a[href="#mobile"]')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 升蓝物流
            case 'sl56.com':
                var auto = setInterval(function () {
                    if ($('#password').css('display') === 'none') {
                        $('#btnPassword').click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 生工
            case 'passport.sangon.com':
                var auto = setInterval(function () {
                    if ($('.ant-tabs-nav-list .ant-tabs-tab').length > 1 && !$($('.ant-tabs-nav-list .ant-tabs-tab')[1]).hasClass('ant-tabs-tab-active')) {
                        $($('.ant-tabs-nav-list .ant-tabs-tab')[1]).click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 21 世纪教育
            case 'passport.21cnjy.com':
                var auto = setInterval(function () {
                    if ($('.login-method__tab--wx').css('display') === 'none') {
                        $($('.login-method__tab--ac')[0]).click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 学校安全教育平台
            case 'login.xueanquan.com':
                var auto = setInterval(function () {
                    if ($('.codelogin').length > 0) {
                        $($('.codelogin-account')[0]).click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
        }
    }

    function getStorageData() {
        return GM_getValue('NoQRCodeLoginData');
    }

    function setStorageData(value) {
        return GM_setValue('NoQRCodeLoginData', value);
    }

    function deleteStorageData() {
        GM.deleteValue("NoQRCodeLoginData");
    }

    //判断网址
    function matchURL(x) {
        return window.location.href.indexOf(x) != -1;
    }
})();
