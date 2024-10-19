const teamLogos = {
    "Chelsea": "https://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_48x48.png",  // Path to Chelsea team logo
    "Arsenal": "https://ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_48x48.png",
    "Man city":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAEZ0FNQQAAsY58+1GTAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAFCpJREFUeNq9Wgd4VVW2/m9vuUnITW56JY30Qkc6CEpRYVQUGEGwgaKow8w89RmkKCKiIEVHwSBCBEVKUBCl14AJJEAo6Y3khvTb66y9A0zCJOqbp7M/DufknrP3WWvvf631r7WPAL9Tc7lcIjr1oiOejlA6fOhQslt0GOioo6OEjgJ2FggErt/jvYL/p9BedJpMx0SH0zn0clGNuuBaJUqr6qFraIXeaKY3COCmkEGrcUd4kA8So4MRFxmgEwmFP1K/nXRkkzKm/6oCJHgCnV41ma2P7jqYK9/xwzmcvFAMZQ8NtAH+cFPJIRGLYLba+fNymRg2mwN6gxm6mhoYGhsxKKUnJt3bGxNHpDUq5dIN9NhKUqTmD1WABA+k0zu6xtbHV36+X/jl3tPQhoXD188HRqMJVaUVaK6vR6CPB3p4qKCQSTh+zBYbmloMqK5vgaePD4LCQ6BUyFFXdxO6slJMG9cfLz1xr0mr8VhFjy8mRfS/uwIk/FNWm/29FRu/d1+TdRgxqcmEDgEu5+YjLtSbZjIVQ/rEIjEqCCKRsMsxHA4nCq5X4cjZK9hzMBeXKxoQl5rExsbVvAuYO2UYXp4xtkImlcyisX/8XRSgwVV02kDYfuTPf/sESt8gKFRKFP6ch6nj+mHu46MQGqDheM/JL0FybAhUhPk3PvwGyxdMwezXP8Oni2fhenkt9hw6j35JEUiLD+erU15zE2u2/IQv955Br/RUGA0GmGqrkfnO086kmOAl9N4MUsT5S/KJfkV4LZ1+3JJ9avTMNz5HTJ8+uFZwGf0iemDb+3Pw4Mh0eKqVaGzWY9wzKyCVSOCv9YSvxgPz39lCf4tAfTFv+r3I+u40qmobcbOpDWqVgp5xR4vehIfH9sWfJw7A+dxLyC0oRUzvdLy37muBn0Y9lAw+LiMjY/fChQsd/2cFSHhfOh1Z/tl3Scs2H0Z8Wgqu5ORg46IZeH7aaD7LT//vRgzuHYNjP1+DQi7Fm3MfhJ+3B8jD4KPNBzBheCoO5xTi+amj+d9VtU3kgQLxwMg0LHgvC9+Q8X9/NB+Pjx/An02NCcBnm/Ygrm8ffJV9AjazOX5QWlQaKfF1d0qIuhFezWaehE/8x95chIQHw1hdhgMbFiA+MggL1+xEja4JYYHe+GL3SUwhI3xz1Q4IySZe/2A7Jo/pi/Lqm5g/YyxukOGO7B+HZZ/uRXJMMHonRKBnsJa72UtFVXjnlUe5bfzPyu2Y8dBgTJswEJlffgfvkFAcOnsVFoMhipSIIiV2kBK/rgAJz+xi69bsU8PfoZkPIY8h1Tdg7/qX4emu4s+cuVCEDTuOIv9qJbIP5eGRsf0wc/IQ1JFQ86aPgRd5oLGDk/izTHjWZv1pKHqGaGGx2XG19Ab2HM6DwWRBTLg/X5XMncexmlaJOYPnpozA9l2H4Kb1w4ETBdB6KBIITg5S4Ojd8oq7WIDnyWAfWvDBt0jom4bWsuvYu+GvaG41wknewk0p5zO7+2Aevlo5lwctFqQCfXugJcqITSRITkExWvVmbqgCoQAWigdyuu6f3JNDJYFg5052wFZgSJ8Y7DuWz5/ZtOwZgp+IXKwM365+EaOfXIZeyQn468odSIgKepMm9zAZ9bFuvRA9EE6u8mL/R99SBiWl4PKpUzi59Q1ovdzxbMbnuFxUzWdxKi2zVCImZWRIiwvjyqz64gd+b8jAZPiHhsDgFMFobXcgKqkQarELNWXlOHQ8D2UErxfJsMcNS+HwGffsCmxdMQc9aIXPkiE/v2gTvv1oHsQUDAc+thhxA/qjKj8Pp7IyimRSUVLHyN0JQoSzjQz3JW3A1fzLyFwykzAfyO/5knFeo6VnAYn57fuHJvMZnvaXjzkUnpw2Hm0Kbxy+3ozcojoUFNfiSlkdP/LpOue6Dldu2hATF4XHxvbBwWN5WJ91EMP69sIzjw7nTmDbvhw88tJqvDVvEhav343pEwchPT4M6zZ9B01wCBrr6rzuSY82d4SSoMPs96MIezr94bcQnZKEaLUT6zJmcLwynLI2dPpSbFgym8Nm067j2H+ceJnDgkg/IbxVNoRqpVDLHJAIbJCIXFDKJbjZUAKD2QH6lQ45Ws1S1DQBLRY3VDQSxMQK3D8kiQx4CF5c8gWW/2UKdpNdzXlsJCJDfflKs9UvahPyYHdu+5ut5ILDaRUa77aBv32QuZ9HWBaksr5ZyDE/cibhMCIAi1+cjLdemASZVEzB50f4ugpwbV0K1J5aCOTkcWUaWk8VBDLidyI5TQ0NLRCymaF/TricVjhtetgMNXBYW+lcDZu+AvV1pXiN3rs1W4KvV72Al5Z+id3r5vMozzhWJMFy0bzJSJn8JmLJlX+4ab/70vkPzyV5F92BEM1+EBGzdc9kZAq9/HxxX3oo99V2wqfd7uDY/OHkRQxIieSe6O/vb8PfJwAJYxZC4JkAgSqMlCBFpD06CC+AvbkQ1rYyiOUaCMVKCCUqSJR+kKpDodAkQuV/D7xDh6P24qf49CcHjxcssLGVnfrqeni4KYhy5OHPD94D3c1m1OidOHz0HINc1JLFi1YRlFy3ScvjxCpF2vAIFOblYw7Rg0qKmuq0p7CdcBns74Ut7z2HgalRmP3GZ2huM5LxhrTPcHeB0FgDQc0emC4uhbmpEE6adTbzdzemVGyIGg0UzZ9b+Dk0nm7czgamRiKR4kZVXSPIsXDKUkgQYuRx98HcIOo6nPe/Nc4DbLm0Wg3iw3wQ4q9BsJ8XzmzL4NfnLpZyRrnrp1zCtRQeKjG8yTP9W7M2wVh7kl86G84QP2qCXRYAR/MlMhW6NnTNlmPDNNwYowjzO3/6GU9STCm4VoULheWYOWkIt4OQgHbZfH29ObSYzFwBFnUpGel78nwxjCYz4+d3BmbEbOealzD/ibHcj3+waT8m3tsf0f5iwrp3F9Nuh0RfCEPJNrqvgcrVAoW9Ho0VP0BCsHGZ6+Cs2g1Hw9lO3WQqXwR5izB6RD+s/uIAxz8z5iXzH+bK3G4shjAZmax2u3PU7RXoTZmUWOml4Xx+KFHiuxtThEXdyBBfFDbY0UNhI/N36yC4E9aaA7BdWgbdlU38cBkqYXBQUqPqRZ5JDodZB0fRetgrtsHYdqNzNFX4QOtmwtHrTRRLfPm7+lHQu7sx2ZiMTNbCkuoYmnxPpkA8SwNZJtVCyUh8VGCXy7z3yHkMHZSMsgYjgjTk/iT/gpC9eAMMzUWwykOgCR1DhC4ETmUwET4PeFqLIbQ1Ev7bKLkREButhrm1uLMdiKSQCk0o1ukxjN6x9/D5LmVIiA7iMmoD/BjEGOrimQLhJeTXWRoYSFSYMcmu2hlKGQPDQuEgr+TOUnWRsn3yG89BX5HNV0RmKoKrpQA15cdhLtlKqXwZRWMzam/ko7X8O7QZW9HcWAxL05XOhEzWA95qIannQmB4KE7nF3dNnUm2QK0HyaoAk5nJzuKAj66hhXJYCblLZbdehSUseqIHBE+ImY6C9iAuUEfBPfk12AUSOOVqtOouwHfgUxA72mBuK4GF+vhHzIKN3CnceiI4ehYU3imdsyqhBNJbEanNLuQOA7fKGXdnXMyls3ybycxkZ91UjApYbEJOolgrbbSgptWK6/VmJPgp0DvYjXsCE3EboUjEYhNLENtHlHhAqOkDUekXaC75BmaTHpbGArhpesFu0cNqrIW19hgpU0bUuA6G2uOIGL+/s+077RQ02YUARpuTC8jatwXkymUiRPvIkVtlwEOJXpxymG0OGIwWTrPEXWWW/u4SVDZbYKdRDbZ2QsaiMn+M2KLZLoCz7hAELf+CgsBpgWfwaHi6HHA5TBAqAkhRB+qqjOTr3aHyiIW4PgcWfRV0BR91eqe58RLMVhc8lYpOkrDU2mB14BpNpNHWIbN0dabTBpVCCplLxEkZd2vUs1+IG9KCVFBK2m3CZLbxa6FYirpmO/IbPVAmSOZCOskLlekp8jrBcUxdCRJSOCnQ1xuIhFkYpXBALR0OH60CaHVwelGlt8JG702yN6FBX4kwT3co6B0scPFcIsoDCsKriCi52e68JYcVKnK5qna0GJkC9VrKYa+1tqGJOD+fTZoGGXWUdZgNlvuqhA74+PngfDPQZBXiulMDd8ktQit1oLrFyi91tEI9PeSorayESOoFo7IHn8E6um0hCNzuI3N3Uh8Lf5/R6U7GLCfa7eTBkjU36b/IslzcPpFMRik5EpaDsFexX8signygN5hQpWuG09l1EYDxoOrScrhEEtRb3KEV3UQl2YnZ0b6eboRbX5WkPSDTbzmnzkKwZS3Mm9bAXn4dEmE7ONr7tL9DTisdpCaFHFXQC/3AhrpRXkGJT2TXZRmSrZpkZLJGBLN6A8qYAhdZuU9XU8uLTqxu01Vjycfhk+cR5iWDVBNErKGWvJEL5a1kK+1WDR+5GO6UuLR+/w0m7f0QfQUtGOGqx+CsZWj7YQcZUrvhl5MSt/t4S+24UVUH7+BQPvaRExcwflhKlzJcJHrhQTIyWROjg9gAl5gC5+IiA+zGpgYEhYXgKCXSXTXqgNLKeiQR/iKTEvD1SROS5Ne4oTOBeECz21D9yUoMLj4BNWE5qqUGMc3V3HYGXzuG1i3ruQWyPhW3+miNP2JPvhdiKAdJ1UpQXKnjAaurdvTcVS6jsbGBKH7gNaIcTUL6r40CRM5ACt1KyndZethdY+WUQweOoX/vOOws1KCP6AQYMpiBMYMUSyRw9YxFnNgMkc2K4ugwXI4Kh9xmQYTADFdELMGsHd8m6nPDYIS8dgfyWlKQGBuGg/uPEKUe1e37iYVCQTIOTOlJ6SYvDt9hoztZoVWna8DFUh0qbzR0OcCDo9KJp1Qgyc2ClKEj8Em2DiPczvB7LRYHdCY7AlLS0WS2Q+0wQ1raAEl5E+QOK+opKwtPTYOPQgwPWbtxxhk3YfU+BfqNHoVElQmM0nQkkx1bBcl0qaweurqbvChMbVdHBbY+MCLNwQqtcWlJvNzXXR2SpZlLPtyKp8el4Eh9FFylR9BLUd7ufQw29AgMxEmXB071iICXQgIPSvzPe4XhNDzgG+jPg2CQmxRJotOoyDuOOvUIPDEiFktXZWHtmzO6nf21JFMvyhbrScaJw1Or6aeDdxQgGFVRhNvNap2Mym7OPo36prYuBwry9cK7jOq+uwErFkzBa9k9kNC0HQnKUn6/ymBHaa/+KNY7cKjRhSMNDpQaCfNJQ1DR1o57f8sRiAs/xueXBuLtFx/C4mUbsOzVKbw001VjsjCZ2AROHdefMYZPSE5Hp6pERkZGGXmj2UtXb+N5ccH5Qu55ulMiNjwAry3fjNeffRBvZBbjfp9ziPV3ocQSAllIBMLHjoN05ESIR02AIX0YBP6hxHlcSDb9AyU53yIzfzAWz5+CpR9mYenLj/CaUXft1Xe3El3xxxXKyDYsebLNTSmfSumkqZMC9EP18mVvJ1stll6FVc3IuVCE3rHBCA307nJQNlv3DkrEorU7ERMRhKxTVggbCjE3sRBGiTfKrV7wUkohJOrhTu7Vz34C97Qtxeb9zTjXPIxS0gj8eLIAny2djbiegd0Kf/TsFSzL/AlKtRumjUpkFb+lNPv77lDxu5V9eeZ9RmNtFVIH9sEsyn+7g9JtJfasm48xgxIgIw+0Yq8FozPqIbn8FV7wXIdowQmEG7LQ+8Z01J/ciMfW+mPrGc92mjAgDrvXzuer2V2rb2wjGTYgZUAfmEiml2fcz3j28l/cH6As5wXyBqvGzV2N+D7p0FMU3f/Zgjvh/Zcay6RY4nOacoey8jJMSDRDd7MSZ25EIiIsgmdZ44emdOvnOzYjcZ4xs96FOjQKBTk/Y++aFxxJMcEjafaP/JoC7LcdW7JPPfj6x/sQ2jMMcmMDdqyax6nsb22sHMN2YqRSCQalRhKUhL+5LxN+8gurYFFpUFZchsXPjGUleLbZsfBXq9OshE0G/R0Z9H0Wk9HvWO51KDS+yNy6DxNGpN5mgf/Wvt6fg6douTfuOIr7hiRj+oKPOX/624qvsD7rEGx2Oy+x902MwPy3tyAqzI/XXLuCzYRn34fL0xfVlTV4ekI6np0yYhvdmsfqQL9pf4AetJISOwelRY83trV5Hzx1CQHRsVj+URZSKMEPDfh3w57y8loc3fwaZkwaAk/K7FZtPoAlL/2Jl0PkMin++tR4xJDQU15ZS0YbgOkPDOqSKjww9wP4xyWg6Mp1PD0+HQtmj2MG+yjNvr0rWbtdV+rANqaHLZg1LncRLeHFsz8jbsAATH3tc8x5K5NvFXVsDF4sWrJoylJCttlxd0vpFcrz7lefvL/T72ysOQszMY3GZu8oOPMzhw0J/w0jACSL5T/aI6OVMNBKbCE4RY3sFxuf+WU2fEJD0eKUYvEHW2m5W/iselCuwOCyaN0uXCqqxpDeMXyzY0T/OEqSrHzX8naVm+3YsKqbjGyDUZZ3PsnGnEWbIdAEQOXuhptFV7H9/TmuUQPjl9Ljc7qb+f9km/UZi9W+/P2N36vXbjuCmLQUXri9nHsBCeFaXnRidRtWlumussH4/EWi64zx7jmUx3lXXFoyz6Cu5J7HnEeG4pWZYytJudkk+A9/xEY383/LdA2tU1Zm7hOy7VHf8Ahe7jPc2uhmdRsGE1bhuO16mVdhmRRLRjxubXSrKP9lG911pSV8u/alJ8aafTXuq1nVmTHkP/pTg0Q6/YUEe3jXT7nyHQfO4RT5fpWXBj7+/lC7KXhlwWS18xfIpWLyQg606U2ov3EDBuLzAygmTBrdGw+MSmtSyu58alD93/7YQ9P5Y49qN1aULaGkhLlD/rEHSzeJw/t4qXkayBIjog71ZBe3P/bY81//2KMbZViBIO7WcftzG8WtIgj79qG+w+c2xb/X5zb/BFmWyIf9AyOFAAAAAElFTkSuQmCC",
    "Man united": "https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
    "Tottenham": "https://ssl.gstatic.com/onebox/media/sports/logos/k3Q_mKE98Dnohrcea0JFgQ_48x48.png",
    "Liverpool": "https://ssl.gstatic.com/onebox/media/sports/logos/nGfV05dipbAc7zzojivKew_48x48.png"
    // Add more teams and their respective images here
  };
  
  export default teamLogos;