<template>
  <div class="form-elements grid grid-cols-12 gap-6">
    <va-card class="larger-padding col-span-12">
      <va-card-title>{{ t('monitora.operacoes') }}</va-card-title>
      <va-card-content>
        <va-popover
          icon="propane_tank"
          color="warning"
          message="Clique e salve os dados do Botijão!"
          placement="right"
          open
        >
          <va-chip shadow color="primary" to="Listar">{{ t('monitora.botijao.botaoSalvar') }}</va-chip>
        </va-popover>
        <va-chip
          shadow
          color="secundary"
          onclick='document.getElementById("iBotijao").getElementById("botijaoSVG").setAttribute("y", parseFloat(document.getElementById("iBotijao").getElementById("botijaoSVG").getAttribute("y")-10) )'
          >Consome Gás</va-chip
        >
      </va-card-content>
    </va-card>
    <va-card class="col-span-2">
      <va-card-title>{{ t('monitora.botijao.visualizarTitulo') }}</va-card-title>
      <va-card-content>
        <div class="grid grid-cols-1 gap-6">
          <svg
            id="iBotijao"
            class="grid grid-cols-1 gap-6"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            viewBox="-0.5 -0.5 215 313"
            style="background-color: rgb(255, 255, 255)"
          >
            <defs />
            <g>
              <rect
                id="botijaoSVG"
                x="10"
                y="80"
                width="190"
                height="190"
                fill="#cccccc"
                stroke="rgb(0, 0, 0)"
                pointer-events="all"
              />
              <image
                x="-0.5"
                y="-0.5"
                width="215"
                height="313"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAAE5CAYAAAADRLXzAAAAwXpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjabVDBEQMhCPxTRUpQQIVyvNxlJh2k/KBwmTPJOi7IOisCx+v5gNsAZgYuTarWmgysrNgtkeTok3PiyRN7Cy2vdSCNFC2SRXJBatw/6/lj4KFbVi5Gcg9hWwVljyhfRuiBRkcj38NIw4jQhRwG3b+Vqkq7fmE70grxDYNY1rZ/zs2mtxd7hxAPypSMidgboLEJqA/BGEntoufF1qyEmQ3k35xOwBs+vllVZ1N0cwAAAYRpQ0NQSUNDIHByb2ZpbGUAAHicfZE9SMNAHMVfU6VSWxzsIKKQoTrZRaU4lioWwUJpK7TqYHLpFzRpSFJcHAXXgoMfi1UHF2ddHVwFQfADxNXFSdFFSvxfUmgR68FxP97de9y9A4RmlalmXwxQNctIJ+JiLr8q+l7hxziCiGJQYqaezCxm0XN83cPD17sIz+p97s8RVAomAzwicYzphkW8QRzdtHTO+8QhVpYU4nPiKYMuSPzIddnlN84lhwWeGTKy6XniELFY6mK5i1nZUIlnicOKqlG+kHNZ4bzFWa3WWfue/IWBgraS4TrNMSSwhCRSECGjjgqqsBChVSPFRJr24z38o44/RS6ZXBUwciygBhWS4wf/g9/dmsWZaTcpEAf6X2z7YwLw7QKthm1/H9t26wTwPgNXWsdfawJzn6Q3Olr4CBjaBi6uO5q8B1zuACNPumRIjuSlKRSLwPsZfVMeGL4F/Gtub+19nD4AWepq+QY4OAQmS5S93uPdA929/Xum3d8P3/Ry0mwCYf0AAA12aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgeG1wTU06RG9jdW1lbnRJRD0iZ2ltcDpkb2NpZDpnaW1wOmJkYmQ3ZGJkLTU5MzMtNDg2NC05NjRjLWU2MDZmOGM4MDQzYSIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MGM2ZDVmMC03N2Q3LTRhMTAtYTVhOC02ZGQxYzc1ZTc1ZjkiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNTczYjFkYS03NTMxLTQwNjAtODE4NS04OGQ0MmZkYTg5NTUiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJXaW5kb3dzIgogICBHSU1QOlRpbWVTdGFtcD0iMTY5ODU4NzczMjM4OTU2MyIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjM0IgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMzoxMDoyOVQxMDo1NToyOS0wMzowMCIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjM6MTA6MjlUMTA6NTU6MjktMDM6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Y2QwNmMyNC1iOTZmLTRkNzktOWEzNy1hYWUyY2EzODdlOWIiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjMtMTAtMjlUMTA6NTU6MzIiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+5X8h6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+cKHQ03IIznBdYAACAASURBVHja7Z15mFTVmf+/996qW7fW3oulWW12RRCUIEHDJCqRBDcQzeRBRYPEKJMYxVEz/pyYZEzGqIzEGTUxGmIw6IAsrgFNRCI4EZQgiyg7zdZLVdd69/f3B3PO3GqQbqCXajif56mn17p1t+99l/Oe90hERBAIBHAcB4qitNn2ZHFKBYIjuK7bptuThOUSCNoHYbkEAiEugUCISyAQCHEJBEJcAoEQl0AgEOISCIS4BAIhLoFAIMQlEAhxCQSdjGmaQlwCQVvjui5kWRbiEgjaGiLi01BOtGpeiEsgaEFckiTx74W4BII2gglLuIUCQRvD4i2vBRPiEgja0HI5jnPCiQ0hLoGgFTiOI9xCgaBoXEpxCgQCIS6BcL86PfYS4hJ0WU4l9d1enEymUIhLUHyulCwXpeBPZr9E30LBaWMpRMwlELRCXMUSe3nrCU90n4S4BCLuOg62bReIXriFAoFwCwUCIS6BQCDEJRAIcQkEQlwCgUCISyAQ4hIIhLgEAoEQl0AgxCUQCHEJBAIhLoFAiEsgEOISCARCXAKBEJdA0Gl09NRF35l2gg8fPoyKigrIsoxNmzbhjTfewNatWyFJ0gkvEXMsHMeBZVmIRCJwHAemaSIajWL58uXYt28fQqEQJk+ejG7duqG+vh6hUAiBQACGYSAQCCCXy2HLli1Yu3YtotEoLr30Uriui3fffReJRAITJ05ESUkJQqEQ7zWhqipkWYZt22hqasKyZcsAALFYDJdeeilUVUUsFsP69euxevVqTJkyBfF4HKFQCHV1dUilUhg8eDASiQRefvlllJSUYMCAARgwYAACgQCSySRM00QwGERFRQX2798Py7IQCoWQy+Uwfvx4XHTRRRg5ciQ/ZlmW4ff7i6rhTIf35qAzkGQyST/84Q8JAAGgSCRCqqryn0/l5fP5+FdZlgkABQKBgq+aph13G5Ik8a+hUIhvJxQK8f9RFIV/L8tywc/eVyQS4d+zz/f7/QSAVFXl3wcCAVJVlX822673vHg/Q9M0CofD/FgURaE77riDUqkUP89NTU1Fdd1N0+zQzzvjLJdhGLjjjjvwwgsvYOTIkbj33nvRo0cPSJKEyspKGIZxStsPBAJoamqCpmkAjvRg8Pl8yGQyKC0thWmaME0TqqoiFArBtm3+mYqiIBAIIJvNwrZtSJIEx3FARNwK+Hw+qKoKSZJgmib/PyKC67rw+/0IBoNIpVIwDAPl5eVwXRfpdBo+nw/RaBS2bcN1Xei6zvfZtm3+ZC8tLQUANDY2wjRNRCIRqKoKXdchSRKCwSAaGxtBRIhGo1izZg2eeOIJPPXUUyAiPPTQQygvL0cwGDyllRnbPAbq6P0406zWyy+/TADoqquuogMHDhz1RHNd95RejuNQPp8nIiLbtvl2c7kcZbPZoz7PNE2yLKvg85vD/u66LlmWxf/HcZyCz2j+HsuyKJfLFWw7mUzy/XMch3RdP+q9+XyeMplMwbYdx+HbZNt3XZcMwyAiosOHD9OFF15IoVCIli9fXnQW64vOU3tyxiU01q5dC1VVMWPGDHTv3h11dXW8ZVZ9fT2I6JRetm1DVVVutVgMEgwGEQqF+BPUcRwYhgHTNHkckMlkIEkSMpkMkskkMpkMstks/zuzcK7rcovWPIbI5/PcSvl8PsiyzGPJZDKJkpISKIoCy7IgSRICgQB/n3f7zVdUZOeIbcvn80GSJDQ1NSGRSKCqqgozZsxALpfDE088UVTX3O/386VXRUKjHQkGgwDAb/SqqioAQENDAyorK085o+T3+wt+VhQFuVyOC867xi5zA73vZcmQ5kkSANzVbJ75YmJgx8fE4DgO/H4//1tpaSkXlSzLPImTyWQQDoehKApM0+TnxnVdGIYBRVHg9/vhui58viO3TF1dHUpKSlBVVcUfEuecc06n3MStpaNd1DPOclmWBdM0UVZWBgBIJBI87mgLJEmCYRj8xmZPeWbJvH3wHMeB67qwLAuWZSEQCPD/ZVaQiZDFSV7hsM+TZRmyLPP/Y+9pbiUlSYIkSfD5fHxfiKhAWKqq8nMkyzI/L8zCWpbFH0qSJPGYT5IkpNNpyLKMMWPGFNX1Zueko2OuM8JyeZ/y7ARnMhm4rotoNArXdRGJROC6boupWl3XEQwGeeqcXUAmJNd1uZViPwcCAf7UZMkH7754BcVe7O/MDfPeGN7vvcfmtYosCcK+st/5fD7oug7HcRAIBKAoChe4oij8f7zbVhSFb9f7N0VRIMsyTNOE3++Hbdv8d8XkEnYWZ5xb2FZuJbspmfVgN9yp3lgdMQ7jdS+ZWL1r/54Kuq63mRfQ1RHiOkFY6jwcDhdYA29sVMwwN5K5ncyiMnGdaszEXEWBENeJnzCfj8cdzCVUVZXHQ53phrQGx3EKYi/2fVtYLbaNFStW4MEHHxT3ipDLicPcHpYlY64VG9gtdrxlXoqi8MFq0zSPchlPhhM9B0QEwzDgui7PVLIkj6qqBZ5BMWcjhbhOkWw2i3A4DF3XIcsyotFolzsGZmXZjcrE1hbCUhQFkydPPuk4MJVKIRaLwe/3H+UFdLU1u4S4TjKhsXr1aiQSCVRUVKCpqQnhcJgLrzVP6s6CZfckSeLjaiyGrKysxHnnnXfKbieL33K5HCzLgqZpUFUVhmEcU8DecbpYLAYiQi6Xg9/vL8i8FuOqk0JcbXxzNjQ04JFHHsGKFSt4DMbq84o9qaEoCo+7AoEAry8sKSlBTU0NPvzww1Pevq7rvGq+uXXyuoCapvHxOW/CyOfzIRwOw3XdgoHfYqpTFOI6SZq7H97xJzaO8+GHH6Jbt274wQ9+wMuGdF1vMaHh9/uRTqcRCoV4MW46ncabb76J9evXQ1VVOI6D2bNno7y8HPl8HtFoFJlMhg8gn+x7NU3jVoI9EHK5HHr37o17770XiUQC+Xyej38xa+JN2rTkmrHxMzZQ7R0XY8mT47mf7P+PZamE5TrNISIkEglYloXx48dj5syZiMVi3IK1FHB/0Q3ys5/9rFUu17G239r3Nh82YFUZtm3jpZdewsaNG5FMJnn1BXt5B6ZPh7WKO8zLEafgxMV1+PBhpNNpVFVVoby8nN987AY+3utUXa5TeS8rzTJNk1tbNvWlR48eSCaTOHDgALeQ3goNb+JDIMTVbjFXU1MTJEnCkCFDABwppWLV8KxU6Itenb3vsixDVVWoqgrbtpHL5UBEOOeccxAOh1FbW3tU+ZOwWkJcHUI6nca6detAROjWrRuPSVjpU3tZrbbANE2+H2xKCiv2ra6uRjabxZ49ewpqIJm18qbuBUJc7UI0GsX+/fshyzJqamp4pq3Y8RYQMxcWODIg7vf7MWzYMADA9u3beVLH21ekNckMgUhonDIbNmyALMsoLy/nT3Q2T8qb7SpGWKbOsiwuGNd1+RSczz//vCBOY3WCjuMU/bEJy9XFsSyLDx537969YGauz+fjYzPHenW2S+hNSmiaBr/fzwUTj8dRUVGBAwcOFJQvMWslkhlCXC2bak+DF8uyePGqd7r9sWIlVk3e2NiIAwcOoFevXtA07ahMGpuc6I1b8vl8p4/RaJrG96N5Ex6fz4dgMIjq6mrs2LGDzz5m1suyLASDwYJzxDKOhmFAVVVks9mCCZrMrWSWr6vUXQpxnQK2bfMbgxXgZrNZXrXQEolEAoZhoFu3bgXzlpgIvYF/Pp+HoigIh8NoamrqlOOtq6tDNpsF8H+lW83nbrHehz169EAmk0F9fX1Bnw52PH6/nwszEAggGAzybbFaQNYDJJVKIZfLFVi8Yp8xIMR1irAKh4qKChiGgYaGBkQiEd6OrCX279+PbDaLgQMHFjyZ2Y3qLdE51gzojqa0tBThcJgPFh9LXOx3AwcOhGVZqK2t5bOgmycyWIu15m4jcKQVm9/vRzgcRiwWQzQa5TWFrX14CXF1YVRVRS6Xw+HDhxEIBKBpGk+lx2KxFt+/Z88eAMDAgQMLYhmvG8We1qw+LpfLdVr1vLenhtdtY1+9ru+AAQMKjrF5Ot7bL4O1BmCiVVWVi5idE1ZmVQxjfEJcHQB7eubzeS4Av98P0zRbVXS7c+dOAECfPn0KYi2vy9O8KYo3y8Y+lzXG6YgEDIuhmFi+qHayb9++AIAdO3YUxJleC5fP5/mYnt/vRygUQjabRTqdRnl5OQKBAAKBABzHQS6X4zEdgFNuuCrE1UXEdc899yAej+M73/kO0ul0wRjQ8di2bRsCgQCqq6uPEhW7Cb1dnLzWzHVdLjrW1ba9qK+vB/B/UziYlW0+mM3Oh23b6NWrF3w+H7Zt23ZMd5YlPrzp/GQyiX/5l3/ByJEj8ZWvfIUnOViseSan7884ccViMQwaNAg+nw91dXVobGzk1eKtCbi3bduGaDSKeDzO3UxvzwhvPOKdqcwyiNFoFOl0micZstksiAiNjY24/fbbeaaNtZ5mVeTsK/v+7rvvLtgvZhUaGxuRSCQKWnOzBwfLknrdRSZ+SZLQs2dP+P1+7N69m4+DsX1nFo/13mDzrUpLS/HJJ59gx44dGDVqFIYNG4ZYLAZd17mYmdt9pjWuOeMeK7fffjvuvPNOHDp0CKNHj0ZtbS1vjead6PdFHDhwAMFgkMdQLMXMUvpsch+rOmdPbjYdhU0D8WbQdF1HeXk5Nm/eDCLC/PnzeSEtG4/SdR2apmH79u248847sWvXLi4qlqQxTRPl5eUF8SU7NtM0EQgEuLjY/rGfFUVBWVkZ/H4/mpqaeJs09r9sO0z47G/ZbBbbt29HTU0NXnnlFUQiEW658/l8wQosbDqKENdp6AoCR8Z7dF1Hjx49EAgEsHPnzqMm40mSxG9mb4yyd+9eHDhwAJdeeilfIkhRFD4p0HEc6LqOcDh81PSQcDhc0HmXzXXy9jFkCZUJEyagd+/evEmnd982btxY0CeQWaV8Ps9T7eym9vbHYDc1iyvZgHfzZE9NTQ127dqFdDqNeDzOm4myLCETFjsnqqri4MGDGD16NOLxeMFYIds3Nm3lTEtqnHGWy1vGU1FRgUOHDiGZTKJ79+7cenkbW3pvfhbHxOPxghslm83yCYbhcBipVAqRSIQP2Nq2zV065lbpuo5IJAKfz8c/N5/PQ5IkvPPOOzjrrLOQzWbh8/lgmiYURUEkEsGWLVvQvXt3fhzpdBqapiEYDHLBMpE1L1nK5XJHzQ5uztlnn42PPvoIO3bsQDweRyAQ4N2umEDZOTFNk89t8w7Ms//xzgU7EznjxOW6Lr/g8Xgc69at433PWZ/15taOpaN3794NABgyZEiBRWueEfS6l837wTPY4nVMANlsFv369QMR4Z/+6Z94zMIskK7rICKoqgrTNNGzZ0/uVrJYMZ/PczfSm0jJZDKQZZl3FW5JXN4HibddHEvKsIePJElIJpOQJInPECi2jrtCXB2I90bp378/n87OnvberF9B5keWsWvXLkiShMGDB/N5UJFIhIvVsizIssyLYHO5HBddJpNBJBLhLcOYkJm1icVimDVrFn79618jHA7jlltu4WJgU+8BYOHChaivr8esWbP4PrDjYbFcKpWCz+dDKBSCLMsF43ct3fjsf1lFSSaT4du1bZuLirmEDQ0NkGUZlZWVrdq+ENdp7hZalgXHcdCzZ0+4rovDhw9zcfh8vmOmqyVJwq5du0BEqKmpQTgc5i6fV0Bs+gnrwWeaJl+55MCBA9i7dy+fbi/LMjKZDF9FRFEUVFVVYdiwYfjWt76FeDyOw4cPQ9d1lJSUQFVVLFiwALFYDKlUCp999hl30ZgFKSsrQyqVwqBBgxAKhdDY2AhVVRGJRNDU1NTi9BhmEbds2cKzfN6YzGvRXddFbW0tXNdFVVUVH1hu3h77THUPTztxtTQpkblwmqahuroaRIRt27ZhwoQJsG2bL17ABk+9A69scJWN8wQCgQKrwqxfU1MT72DkOA6CwSB0Xccdd9yBxYsX8+SGpmkFg9fss95++21ceumlMAwDuq6jrKwMjuMglUrxsqSxY8fytD77bNu2ecwza9YsPPbYYwXZw1AoVNAt+Ficd955CAaD2LhxIyRJQiwWO2o6jbdxzaFDh6BpGvr373/MdZCZK9nVGnoKcZ1k5pDFHdFolHdQYpk7rwi9aWsiws6dOzF48GDEYjGevfPGV0x0zDqwp7hhGHjhhRewePFiTJgwAWPGjEE6nUY0GuXtxdgCBolEgo+VERF0XefLvTqOwxcP37dvH2pqapBIJPiyqk1NTejduzf+8z//E4sWLcKAAQMwa9YsRKNRnv1sCdZncN++fUd1f2L75C2Dampq4m41s+TeQXRvidWZJrAzTly1tbWora2F3+/Hzp074boujy9YDWDz1UpYZcXhw4eRz+exdOlSGIaBUCiERCKBaDTKM3Ese8cEWVFRgZUrV+LFF19EMBhE9+7dMW7cODQ0NPCnurf/fM+ePXmD0Wg0imw2C7/fzxuOsvWWhw8fjnw+j+rqap7k6NGjBzRNw9ixY/Hiiy/igQcewNatWzFixAjeqrqlaR+xWAxNTU1IJpPIZrMoLS0t6BrFSqLYRMpUKgVd17F//35s2LAB0WgUkUgEJSUlCIVCZ2xdIQBIVAzNHTywwUvveIl3rhRz3dj/sv57zceqTNPEnj17sGHDBnzwwQf4n//5H3z++ec4fPgwz76xZMa1116LP/zhD8dsIcb6/O3ZswdDhw6FYRgoKysrqA1knWu9AX2x9M04UZhQy8rK8PHHH6NPnz5IJpMoLS3l1pYNG0QiEUybNg0vv/wyQqEQrzsMhUKoqqrCWWedhREjRmDs2LEYPXo0+vbtW1AFw4YYmieE2MKB7Bqwhc672gB00Vkub0qbJQvYyWdzsJj74a1dS6fTcBwHa9euxZtvvolly5bxIlvmApaXl+Pcc8/F8OHD0bt3bxiGgcceewzJZBKKoqC+vh7RaJRXXHjnK+3atQuGYeC6667DpEmTjhqgZRUMzAp6xdV8Qbv2fji1JhvYfHUTtn+RSATz5s3Du+++i3379qFPnz48UcFiPJYgAY4MrAeDQd6/cfPmzairq8OePXuwZs0a/PnPf+bxp6ZpmDJlCi699FJ87Wtf4+5qLpdDMBg8agiBDYYzd9Y7B6+rJACKCsMw+OrrrusetWI9Wz2erTBfV1dHb775Jt18883UrVs3AkAAKB6P0+TJk+knP/kJLVq0iDZt2nRMM1JZWUl9+vQh13WP2hfXdSmTyRAR0fz58ykWi9ETTzzR9czRCfKLX/yCotEoPfPMM/xc5HI5SqVS5DgO/52u69SzZ0/q168f1dfX/7z5dj7//HN67bXX6Ec/+hGNHz+eKioqSFEUAkDdu3enmTNn0qpVq/j1NU2TGhoaSNf1gmug63rB53YVis5ysXo4NljpnSJiWRZ/8h48eBALFizACy+8gE2bNvFB0nvuuQdjxozBuHHj0LNnT2n58uUtfiZbtWTnzp245557kEgkUF9fj8GDB+Ob3/wmbrjhBuzZswepVAq9evU67WOFkpISmKaJTCaDpqYm/O53v8Orr74Ky7KQyWQwevRo3HrrrRg2bBivV6ysrLy3+XYGDBhw1OzIN954g15//XUsXboUv/71r/HrX/8aZ599NmbOnInp06fz7GY2m+XL6R5reVxhuU6RXC7HLQfj0KFD9OCDD1I8HicAVFJSQpMmTaIFCxaclEUZMWIEBYNBuummm/g2Bw8eTP369SNN00hVVZoxYwade+65pGka/e1vfzvtLdeqVatIkiQ6//zz6bbbbqNAIECSJFHfvn2pd+/eBIBqamrolltuIQB0wQUXnNQ5efXVV+lb3/oWxWIxAkBVVVX08MMP08aNG/n1tm2bTNMk13XJNM0uZbmKTlzZbLbA7WBs2rSJ5s2bR5FIhABQ79696cc//jHV1tae0s1+9dVXczdSVVU666yz6MEHH6Qnn3yS2N/YxVcUhXbu3Hnai2vXrl3cxQ4GgwSApk2bRk8++SQ9+uij1KtXLy4wv99P06dPP6VzsmXLFrr77rv5w23EiBE0d+5cqq2tLQgBuhpFabl0XadcLsdjrOXLl9Oll15KAKi6upp+8pOfHNPHPxk2bdpEH374IS1fvpyuv/560jSNQqEQj90uvPBCWrp0Ka1du5bWrl172guL8ec//5nWrFlDS5cupVGjRvHzAYA0TaOZM2fSihUr6NVXX6UPP/ywTc7L7t276d577+XWcfTo0bRkyRIek7F7oqtQdKl4lqJVVRX79u3DT37yEzzzzDNQVRW33norfvWrX7Vrl5MXXniBVFXlCy1UV1dj9OjRZ3Sr2U8//ZRWr17N1yCLxWK45ppr2u2cbN26lZ566inMmzcPjuPgu9/9Ln7wgx9g8ODBXevEdbSaWVbuWO4fyxQSEb300ks0ePBgAkBf/epX6S9/+QtBcEbxpz/9ib7+9a8TABoyZAi9+uqrPO5meGPypqYm4Rbu3bv3KGGxr5lMhu6//37y+XwEgB5++GEhqjOYffv20X333UdVVVUEgB544AH+cGb3jOM4Rekydri4vCfBtm2yLIt/v3v3brrsssvI5/NRv3796N133xXCEgAAFi1axGO/qVOnUi6Xo3w+X3BvpdPpM1tcLOvDRJXP58lxHNq6dSuNGzeOfD4fXXbZZbR//34hLEEB9fX1P7/mmmtIlmUaMGAA7dmzh3RdJ13Xj1kEcEa6haZpkmVZ3KyvWrWKhgwZQgDonnvuEaISHJc5c+YQAOrfvz/t2LGDcrlcUY6Bdbi4vGNXtm3TypUreer1kUce+UJh7d27V4hOwHniiSdIlmUqKSmhTZs2kWmaBffWGesWZjIZMk2TPv74Y+rbty8BoBdffFGIR3BC/OxnP+MC+/vf/y4sF4u11q9fTwMGDCAA9NRTTwlhCU6KefPmUSAQoOrqavr8889Pb3Ex05zP57kfzCrZDcMg13Wpvr6eRo4cSQDopz/9qRCW4JT4xS9+QQBozJgxR1XVe8fCOjrp0ebiYgfQ/EAaGhq4+Fgp01133SWEJWgTHnroIQJA//iP/8g9JMdx+H2Yy+UKpit1WbewubBc16V8Pk+GYdCDDz5IAOib3/ymEJagTZk0aRIBoMcff5yy2Swf9mH3Y0cX/6K9YirbtvkgX2NjIxERLVy4kADQRRddJIQlaHMOHDhAZ599NgGgxYsX8/swlUqdHjEXq2BuPnq+detWOueccwgArVq1SohL0C688cYb5Pf7adCgQXTgwAF+P3a0S9hubqFpmvxg2Oj5jBkzWhzLEgjaMv665ZZbOrU0qt3Excjn8zR//nwKh8OswlkgaFf27NlDkyZNIkmSaNmyZZ1WvdFuqXgi4r4ucwfFtBFBR7Fy5UrSNI0GDRrE8wDsa5dOxRuGwUX2r//6r+Tz+ej73/++EJagQ5kxYwZpmkY//vGP+b3JMofeeWCGYfBuY0XvFjKLtXfvXurVqxf16tWL/v73vwtxCTqE3bt3E3BkBnUoFKKamhrav39/gbi85Xjt5Ta2a/nT/fffTwDoxz/+sRCWoFO4++67+aTb5nMIWV/K9qrcaLeYa9euXVRVVUUDBw4UwhJ0KtXV1dS/f38+A765S9h8jLataPPeyqzF85/+9CfU1dVhypQp4uoKOpWpU6di586deOWVVwAcaTzLlm3yrjnd5rSHOTQMg4YNG0aBQOCM6PMnKG42bNhAgUCARo0axRsjsSSGt/ChS8Rcb7/9NgGgK6+8UghLUBRcc801BICWLl3KXcD27ofYLktuPPPMM9A0DXfccYe4qoKiYMaMGQCAt956C6Zp8jXGAHAXsaVVNzvELWSq95b0s2Dw8OHDVFlZyXoOCgRFQ01NDcXjcdq/fz9Pw3tdwrZ2D0/KcrHFssmzSBxjzZo1SKfTuOSSS8TVFBQVF110EZLJJNatW8cMS7uul3bSW2aLYwPga+QCwJIlS2AYBqZNmyaupqDY4i6YponXX38dwJEMYfN1sDvVLfSaTjayzca2crkcnXXWWVRaWipcQkFRUlpaSkOHDuVLE7UnJyxV7+LRzRci27lzJ/bu3YuRI0eKqygoSkaPHo0dO3Zgz549Ry0qXzRuYcFG/ncn161bB8uy8A//8A/iKgqKkgkTJsAwDPztb3/jay+z+KtoxUVE+OCDDyBJEsaPHy+uoqAoueCCCyDLMt5//31usaidVtFqswjOcRxs374dRISamhpxFQVFSa9eveDz+bBt27Z2/6w2W/zOsiwMHDgQoVAIW7ZskcRlFBQr8XicwuEwPv30U9i2jWAwyF3D5kNLnW65LMvCzp07sXv3bnTv3l1cPUFRU1VVhVQqhWQyWZCga2v3sE3E5ff7YRgGJElCnz59xNUTFDU1NTVIJpM4dOgQr4ovWnHpuo66ujoAEJZL0CXE5TgOGhoaAACGYRyJkSSp+MRlGAb27t0LIhLiEhQ91dXVAIB0Og3gSIWR67ptXqHRJlvTNA26rgMAysvLxdUTFDUlJSUAgGw2yy1Wewwi+9piI47jwDRNlJSUFASIAkExwiqLstksXNdFIBBol89ps0FkRVFQWlrK/VeBoNjRdR2O40BRlDaPt9pMXEQE13VRXl6OqqoqcdUERY0kSVAUBY7jwO/3w7Ksdpl60iZbdF0XpmmCiODz+cTVEwjaSlyKosCyLBw8eFCISyBoS3H5/X4oioKDBw+2i+8qEJyx4vL6rLZti7MqELSVuNLpNAzDQCAQQD6fF2dVIGgrcdm2Dcdx4DgOcrmcOKsCQVuJS1VVqKoK27bFOJdA0NbiyuVykGW5oMpYIBDiEggEQlwCwRkjLtM0xVkUCITlEgi6iLjYHC6BQCAsl0AgxCUQnNHiyufzICLoug5FUUBEYiayQNAW4lJVFYFAAKFQCKqqQpZlvkqfQCDEdQqwph6O48CyLP5VIBCcUeBVmwAAIABJREFUgrgymQwsy+JFu80FJxAIcZ0kkiTB5/MVvGRZFjORBYL/5aSV4Pf7+axjy7Kg6zpc14WmaeKsCgSnGnM5jgPbtkFECAQC0DSNrxghEAhxnaKwJElCLBZDnz59MHToUDHlRCA4VXFpmgZVVVFXVwfHcfj0/kQiIc6qQHCyMRdbJEzTNJ4tPHDgADZv3iwSGgLBF4mrpdX1HMfhzT8VRUEsFoMkSSAiGIYhxCUQNHcLiegLhcX+xsqbvKtCsP8PhUI8HS8QCDziOt6q5s0FpygKZFnm1oq1s27PldEFgi7rFrZUcHssiyZJErdUbDEGIS6BoJnlOpFkBhvbAo4MJrOuTz6fT4hLIGhuuVhMdayYySsYZq3YGBcRwe/3w7Zt0cpaIDiWuCRJ+sIsoff3LOnBVudjVfBe91AgEIiZyAKBEJdAIMQlEAiEuAQCIS6BQIhLIBAIcQkExSgu7+ILrDkNmyQpBpIFxU44HAYAPgexvdqyn7C4JElCIBAAABiGwas12GCymIksKHbS6TQcxyloScE6mbUlJzX5Std1XqHBxCTLMgKBgOhbKOgysHs4Go3CcZw27xZ9UuJipVKBQIC3s85mszBNU7SzFhQ9zGIlEgnufTGhdXrMFQgEeC1hJpNBMBhEWVkZotEoysvLxdUTdIm4KxaL8RCHuYadarmY+XRdF7IsIxqNIpPJYMuWLUilUrjpppvwpS99iWzbhqIoyOVyCIfD0HUdqqqKwl5Bu9J8Bod3Fj0AlJWV4cEHH0Q2m8XmzZuRSCRQVlbWLouInLC42A6YpgnDMFBSUoJ///d/x/PPP494PI5kMolkMgld16FpGnK5HILBIBeZYRjiDhC0q7iaz+7wCsy2bWiahqqqKjz77LPo0aMHfvSjH8E0zQIr1hZIdIKmhP27JEmwLAt+vx9nnXUWDh06hC1btqBPnz4wTRO2bSMUCnELl8lkEIlEhOUSdKrl8vl8sCwLhw8fRu/evTFu3DisXr0apmm2eab7hC0XU3g+n0cwGEQymcSYMWOwcOFC/P73v0fPnj2RTqchSRJCoRDq6+tRWVkJx3FEGwBBh4mr+RxE9mLWKZFIgIgQj8fhOA58Ph9s227T7mUnvCX24cw9LC0txdSpU/Hee+/hgQceKOgQ5fP5uHtoGAZ/kggEHe0WHotBgwbhO9/5Dr+X27pz2QmLi03v95rQqVOnYsOGDfjpT3+KBx54AMOGDePt1/L5PKLRKLLZrBhgFnSa4JjA4vE4/vSnP2Hu3Lm44YYbMGnSJORyOQQCgc5PaLCBYqbyVCqFWCyGeDwOVVVxwQUX4IorrpDEJRUUKwsWLCDHcRCJRAAcaSvYHuOzJ2UHJUniSwaxHWxsbIRpmkilUuLqCYqacDgMv9/Pl7titYbJZLJzxZXNZuHz+aBpWkG3qEAgIJYPEnQJ2KqoTU1NMAyDDx6XlpZ2rri82RTLspDL5WCaJrLZLHRd55ZMICjmGExVVYTDYQQCAdi23S7LDZ9UzMWagnpXkYxGowUdeAWCYsVxHJimyaeaWJZVMCbbaZaLpdqb9y1k7ay9c70EgmJFURSevQ6FQkfE0MaGQZgZgaCdEOISCIS4BAIhLoFAIMQlEAhxCQRCXAKBQIhLIBDiEgiEuAQCgRCXQCDEJRAIcQkEAiEugUCISyAQ4hIIBEJcAoEQl0AgxCUQCIS4BAIhLoFAiEsgEAhxCQRCXAKBEJdAIBDiEgiEuAQCIS6BQCDEJRAIcQkEQlwCgeD4nPDid5L0f2uJsxXSvX9r/juBoNhwXbdgyeH2umeF5RKcsTBRCXEJBG0E877a28uS2+tpIBB0BavVpcQlEHQFYUmSVJA/EJZLIGgH97C9RCYsl+CMtVwsW9heMZgQl+CMtVrNLZbrup0vLl3X+Q76fEeGyuLxOGRZRn19vbhygqKmoaEBtm2juroarutykSmK0vni8vv9/HvbtgEAFRUVACDEJSh6UqkUACAUCsG2bW4gOt1yEREUReH+qeM4AMCfArt37xZXT1DU7Nu3DwBQXl5eIChmKDpVXN4dYUFh9+7dIUmSEJeg6Pn888+hKAoqKiq4K+gth+r0hAazWKqqAgBKSkpQUlKC2tpacfUERc3OnTtRVlaG0tJSHuI4jsPdw04Tlzf4YybVdV1omoZBgwahrq4Ou3btEoNdgqLks88+o4aGBgwePBihUIh7Ye0x1nXSbqHf7+ffm6YJn8+H888/H42Njdi+fbu4ioKi5JNPPoFt2zj//PO5pXIcpyCP0Oni8n5vWRYAYNCgQSAiHDx4UFxFQVGyfft2yLKMQYMG8d8xD6ytExqgk8RxHDJNk//c1NREW7dupWAwSBMmTBBuoaAoufLKKwkAHT58mLLZLFmWRbZtF9zLbcUJR3DMhDbPrITDYcTjcVRWVmLPnj3iKgqKks2bN6NHjx4IBAIIBAI8W1gUMRfLErIdYj8rioKysjJceOGF2LFjBz766CNhvQRFxZo1a+izzz7D5ZdfzpMZXAiy3Pni8u4EEcF13YKBuGuuuQYA8Morr4irKSgqFi9ezFxD+Hw+nivwGoxOjblc1y343nEc/tU0Tdq/fz+FQiEaNmyYsFyCoqKmpoYqKiqotraWiIjy+TwRUbvEW0REJ5XQcF23QGQMFhhOnjyZANCHH34oBCYoCt5//30CQFOmTOGiam4k2pqTcjS/KPhjweFNN90En8+H3/72t+KqCoqCZ555Bpqm4frrry8Yo2X3c1sX7Z6UW3gsa2VZFle+YRiUy+WourqaKisrqa6u7ufi0go6k4MHDzaGw2Hq378/JZNJIiKyLOsoj6soLFdza+Xz+QpmdcqyjFtuuQX19fV48cUX/1lcXkEnW60y0zQxffp0lJSUAEBBHaGiKAXTqIrGcjWHPQE++eQT0jSNxo4dK+IuQYezf/9+AoDDhw+/NHz4cKqoqKANGzZQR4L22Gg2myUioptvvpkA0O9+9zshMEGnMHfuXAJAt956K3U07SKu+vp6IiLasGEDaZpGgwYNErGXoMPZsWMHDRgwgKqrq2n9+vVdX1yGYRT8PHv2bAJAjzzyiLBegg7lwQcfJAB09913t1u6vUPFxQ7Atm1yXZc+++wz6t+/PwWDQdqwYYMQmKBDWLt2LZWXl1O/fv3o008/Lbg3u7RbmMvleLUxEdG8efMIAN1yyy1CXIIOYfr06QSA5s6dyx/2p424msdfX//61wkALV68mGpra4XIBO3G4sWLCQBddNFFR92HXV5cRES6rpPjOKTrOrmuS++++y5FIhEqLy+ndevWCXEJ2pT6+vpbAeCjjz4iVVWpe/fu9PHHH/PBYu+gcZcVF6vbYi4hM8X5fJ7+4z/+gwDQ1VdfTexkCARtKbCJEyeSJEn07LPPkq7rZJomvxe7vLjYgbDBZNd1+ffpdJqmTJlCmqbRbbfdxq2XSNML2oJ//ud/JgB02223HRVfZTKZ08ctTKfTvHKeDSoTEW3fvp2+/OUvk6Zp9POf/5wL7ODBg43i9hCcLCztPn78eGpsbCTLso45c+O0SMXncjluxVzX5cW9pmnSrl27KBaLkSRJtHTpUi6wxsbGs8RtIjhRfvvb31IoFKKamhr6+OOPiYgolUoREVEikeDxVlNTU9cWl67rRwmt+fyvRCJBb7/9NpWVlZEsy7Rs2TKR4BCcFM888wwBoEGDBtGiRYuOOQmS3ZNdPhXf3BQbhkGmaRYcGHuqLFy4kILBIPXt25eWLFkiBCY4IV5//XXq1asXqapKf/jDH8h13YKHO7NUjuOcPql470zP5k8LJr58Pk+GYdCzzz5LACgej9Prr78uBCZoFYsWLSIABIAWLlxY0GqCxfzNy/Haazp/hyc0Whpg1nWdZ3CefvppCoVCBIBVcwhOkdMtA/vpp5/y++K5554jTdNIlmX64x//2CnCKUpxERE1NDTwk8Gs3GuvvUY9e/YkAHTXXXcRm49z6NChD4VUBOxeeOihhwgAlZeX01//+lciIkomk5TP5zs8pio6cdm2XZC1aWho4N//+c9/pgEDBhAA+va3v03r168/ISu2b9++L/x/b6q/rQXblQfE22LfGxoaLmmLfTnedvbs2UOXXXYZAaCxY8fSe++9xz0h5gIWGxIRdYobZlkWX/Y1n88DAILBIA4dOoTbb78dixYtQnV1NebMmYP169eDiJBOp6GqKu69916MGjVKYjdHZWXlM6e6P4sXL6aXXnqJ97L7Ivx+P2zbRiAQwNSpU3H11VdLp4NVeO6552jZsmUtLqNDRDAMA8OGDcO3v/1tnHvuuW16/CtWrKDf/OY3MAyD93QfOHAg7r//fiSTSVx77bV46KGH0L9/f2SzWfh8PgQCAb5v7dE592TpFHE5jlOwmjo7MbquIxgMYvfu3Xj55Zfxq1/9ii+mV1FRgcbGRsiyjHPOOQfXXXcdwuEwpk6diurq6lad0T/+8Y+0detW9OzZE7lcDpZlwbZtJBIJLFiwALW1tS1eHNd1UVpaimQyiXg8jhtvvBFlZWUwDAPdu3fn2xw6dCguv/zyornS9fX1ty5YsODpuro6BAIBLqJQKIQPPvgAL730Er82LR2/LMtwXRfDhw/HVVddhUgkAiJCIBDgovjyl7+ML3/5y606/jfffJM++ugj1NfX4/HHH4fruggGgwgGg2hsbISiKFAUBQ8//DC+973vQdM0OI4D13V57wvTNAH833pxZ6S42HJDTFj5fB6yLPOnj2VZvPXVk08+idmzZ2PixIn42te+hkgkgj/+8Y9YtWoV39748eOxevXqFi/ikiVL6Oabb0ZjYyMikQgymUyBNbIsC1dffTW+8pWvtPhgqKqqwu9//3usWLECsVgM6XQaRMS3wy7yq6++issuu6woBPboo4/SAw88gGAwCMuy+D4Hg0HuOfy///f/UFpaetztBAIByLKM5557Dh9//DFKSkpQX19/1PI73bp1w6ZNm2a15FVs3LiRrrzySuzcuRPAkWYxN910E0aMGIGmpib87ne/w+7du7FixQpcfPHFBdbJdV1+P7X1wnVd1nIBRxZ99vl8vGe3aZpQVZW7f7FYDAcPHsSkSZOwceNGKIoCwzAAAOPGjcOdd96J73//+wiHw3j77bfRp0+f497EN998Mz3//POYO3cuevbsyS1NLpfDrl278Mgjj2Dfvn2t6l+naRp0XcegQYNw66234txzz4VlWWhqakI8HseHH36I++67D7NmzcJTTz1VFOIaPXo0bdu2DXPnzuXWV1VVxGIxrFy5Eg8//HCre/eFQiHkcjmMHTsWN9xwA7p3745gMIhcLgdFUfDee+/h0Ucfxe9//3tMnz79uMe/evVqGj9+PCZPnozp06dj+vTpMAwDPp8P0WgUiUQCl112Gd566y0uLCJCJpNBIBDgloo9lIuJDpe7YRgIBAKIxWIFv1dVlZ+gWCwGx3FQUVGBadOm4aOPPsKUKVNwzjnngIhw4403ok+fPrj77ruRSqVaFFZtbS0NHToUPXr0wA033ICSkhLu3mQyGUQiEQwfPhxr165FOp1uMebK5XIoKyvDxIkTMXz48CMn0ueDbdtQFAXDhw/HI488grfffhuNjY1nlZeX7+jMi7xhwwYaMWIEpk2bhhkzZvAnfyqVQjQaxYQJEzB69GisX7++RbeYue4lJSWYPn06qqqqkE6nEQwGIcsyZFlGSUkJHn30USxZsqTFfauqqgIADB8+HFdeeSXWrFmDRYsWIRKJ4Nlnn0U6ncZjjz3GBaSqKkzTRDQa5Z4E8xqKDipSWKr+ySefJFmW6dlnnz2qvKp///4UCARo3rx5dLxVVX75y19SLBaj++67jxzHOe6r+ZhJ854gLb0/m82S67r0ve99jwDQ8uXLCQD27t3baeN3d955J5WWltKCBQtadfzetHbzAtiW3m8YBrmuS+eddx75fD7aunXrFx73unXraM6cOaRpGk2fPp1nk9k5nzZtGkmSRJs3b+6U8qVTRUYXQ5IkNDQ0wDAM1NTUwDAM/PCHP8R5552H8ePH0yuvvEIbN24suKBvvfUWstksLr/88ha3r+s6FEWB4zgwTROSJMEwDO6StugK+HxwHAdTpkxBOBzG/PnzAQC9e/fucPeQpdlfeOEFEBEmTJjQ4nvS6TQ0TYMsyzAMg7tilmXx2Kw11+iWW26BbdtYsGDBUV7EY489RuPGjaMJEybg+eefh67rLcZ6XRFfV9thVVVRUVEB0zSxe/dulJWVYc6cOXjnnXfwwQcf4Oqrr0Y0GsXEiRPpggsuwMCBAzFr1iyMGDECF110UYtxBXNtWHDNAudsNtuqTJSqqnAcB+PHj0fv3r2xZMkSbN68mYYNG9bh4qqsrHxm5cqVdMkll+COO+5Ajx49Wjx+TdMKhksikQg/L8FgsMX3q6oK27Z5Amr58uV4+eWX6ZNPPsF7772Hfv36wbIsBINBjBo1Cr1798aiRYvg9/uRzWYLPl+Iq4PJ5/MIBoMgIti2jR49euDOO+/ErFmzsGPHDqxYsQLLli3DW2+9hbfeeguhUAi6ruPmm2/mT9WWnrosnS5JEs+OMR+/NdlQ13WhaRq+8Y1v4JlnnsFf//pXrFmzhhRF6ZBUsSzLME0TuVwOjzzyCEKhEKZOnYq6ujpUVla2ePymaUKWZS4s27ZhGAb8fn+LsU0ul0MoFMLgwYPx1a9+FcuWLcP06dOh6zoA4OKLL8Yll1yCiRMnYsyYMfjoo4/w5ptvgoj4w0yIqxPdQpYSDoVCaGxsRCaTQWVlJcrLy3Heeedhzpw5aGhowPr163H99dcjFovhiiuuaNVq7WyQ2O/3Q1EU5PN57iZls9mjViQ81pObBdpXXXUVHn30UcycOZMnPDoKTdP4Am/9+vXDhRdeyLOxLbm1lmXx1e0zmQxCoRDC4TAfSzoebCjCMAzccMMN+Mtf/oJ4PI558+Zh+PDhKC8vL7CAiUQCyWQS2Wy2fVYaEeI6sZvGGx/l83mUl5fDdV0kk0lEIhH4/X5069YNsiwjlUph2rRp6N27N5qamngj/uPFXI7jIBwO889jN6Qsy60aZGYiGj9+PMaNG4f3338f3/zmN9G/f38kEol2t1osm7l+/Xp88MEH+MY3vsGF1dL+p9NphMNhHmsyoTV/uH0R7Pzato1Ro0ahqqoKlmXh4osv5g8my7K4JYzFYggEAqisrEQoFGq/VR6FuFqG3fzBYBCxWAyNjY3IZrMIBoMoLy9nGVCYpsmXjr3uuusKLnxLlpEJa9euXchkMtB1HWVlZaipqWnVza2qKk+AXHXVVfj73/+OcePG4a677mq1ZT5Vy25ZFmbPno0PPviAH39jYyMqKiqO+36WUtd1Hbt37wYR4dChQwiHw+jTp0+Ln88eYJFIBJFIBJMmTcK8efOwePFiXHvttfjfelbucjIrd/jwYei6Xpwp9ZN90HW1HQ4EAgiHw5BlGfl8HrquIxqNFgwyMyv2yiuvoKqqCtdcc01BRUZL4gCAhQsX4pprrsGYMWNwwQUX4Pzzz8cDDzzQ4vtzuRzfT8uyMGXKFGQyGaxYsQL5fJ6vId1eL9M0YZom9uzZg6effhpjxozBmDFjYNt2i8JibuG2bdswY8YMDBkyBGeffTbOPvtszJo1i5eitWS5stksstks8vk8Zs6cCb/fj//+7/9GIBCApmnc/ctkMjAMA4qiIBQKnVbJjC5puVg8xIRQUVGBRCKBsrIyAEcGRmOxGJYtW4ZEIoEf/vCHAIBIJALLslosk/H7/XjnnXdw0003QZIkXHfddVAUBatXr8ZPf/pTuK6Ln/3sZwXFxo7j8PQ92zdWP9m3b19ceeWVWLp0KXbs2MEHndsLwzAQCoXwyiuvQJZl3HjjjTzJwAa5jwcR4fbbb8fKlSsxfvx4XHTRRfj444/xxhtv4IorrsBf/vIXhEIhXq7GLJVlWZBlGZZl8Rg1l8th+PDhuPjii7F06VLs27cPvXr14p4BEcFxHH7eWBJJWK5OgmXymJDS6TT35VnlBxFh6dKlsCwL1157LVzXLbjxW3I7Fy5cCFmW8fjjj+O5557Db37zG7z44ovo27cvfvWrX6G2thbBYJC7f+yGYMJnmUyfzwdFUbhbNn/+fOTzef7Sdf2ol23bx30d6z3eFzsXS5cuhSRJPNbJ5/Otqr9btGgR3nnnHUyePBmrVq3Cv/3bv2HRokW4/fbbsW3bNrz66qu8htJ1Xe7esQSQpmlQFAWSJHEhT5o0iW87l8uhsbERjuMgGo2iqqoKsizDtu3TKt7qkuIKhUL8JmEuIrvYuVwOuq5jw4YNeP311zFixAiMHj0apmmitSWUfr8fq1atgqZpXBSGYeC8887DFVdcgVQqhd27d3NrFQgEYNs2TNMsmPrAhJzL5fC1r30NvXr1wtKlS3m1dzAYhKZpR73YONsXvY71Hu/LMAysW7cOf/3rXzF27Ficc845J3R+d+3aBdd1cdttt0GSJOzfvx/BYBA33XQTdF3HO++8wy0UOwfewWXbtvm51jQN+Xwe3/jGN1BZWYnnnnsOoVAIkUiEW6yDBw/yhx87f8It7CRM0+RPuNLSUmzfvh0///nPkc/nIUkSgsEgPv/8c7iuizlz5vALzm68lsaZ2BPeNE1uIdlTOp/PIxKJ8LEw9mSWJKngf70WMpfLIR6PY8yYMVi8eDHuu+8+/lRnT3gW5BNRi/vXUjq8pKQE77//PgKBAGbOnMmPiRXWBoPBVp3nVCoFx3G4u11XV8fPOXBkgN27VC97CLHfsdpNABg8eDAuuOACvPHGG5g9ezZCoRDKysoQDofx2WefAUCrxxG7FF2ttpD9PpfL0ezZs0lRFFIUhQCQpmmkKAqpqkr9+/en7du3UyqVKui2ytq8fdGLiOgXv/gFAaAf/OAHVFtbS4Zh0IsvvkgA6Pzzz6d9+/bxbXkbnnprEpv3dFiwYAHV1NTwpiqyLJPP5yO/309+v58URSFZlvnfv+gly/JxX5FIhADQyJEjafPmzdTU1MT79rG6v+O91q1bR6qqUu/evWnLli3kui598skndPbZZ1MsFqOVK1cW1CF6az29jYkSiUTBOZg/fz4NHDiQFEWhaDRacEyKotDTTz992tUWdjnLxVyIYDCI+++/H1dccQUaGxu5q5VKpaAoCoYOHYqzzjqLP7lZnWBLcYfjOLj++uuxZMkSzJ07F88//zwkSUIul4OmaZgzZw569uzZqtS59+n9rW99Cz6fD5qm8YmikiTx9zPL1VJc2NJMaVYlPnDgQAwdOrQglmwNo0aNwu23347HH38cI0eORFlZGfL5PJqamvC9730PEyZMQD6fL5gqFAgEuNVlU4dCoRD8fj93Ha+//nqUlJQgk8kgHo/z/QmFQggGg/jSl74kLFdnWy5mtY71FGMdftmTj1V3e61SS09u1o/hs88+o1/+8pc0duxYisfjNGXKFFq3bl3Bk9m7egb7HMMw+O9M06R0Ol1g3VpqsWxZ1nFfJ4rXarXWcruuS2+++SaNHDmSampq6Ctf+QrNnz+/4Pyzc82OjW3f2xOF/f1YnZnY+23b5t8nk0lhuYrBerGgOpfLoaSkBLlcjmfn2NiJpmlobGzkFRwsJX08IpEITNNEdXU17rrrLnznO98pmP/lncjHYqpYLMYHXjVN4/vCMmiSJMFxHBiGwUt/mKVqbgFbSkW3JqPG4jj22SwObM1QBLMoEydOxMSJE5HP58FqIrPZLAKBAB9+YAkgFm+pqsoH8lm2lJ0HFiuyqfm5XA7RaJRnCUOhEEpKSkSFRnvDxqpYRtB1XYRCIZ52D4fDfCCS3eRsHMc7+k9EKCsr42U/LQmL3bws2eA4Ds9ssb95Ew5EhGg0ykXC3CNWWOwVC6sqZ79r7/EcJjBvlX9rUvHecTqgsFaSZTPZdokIPp+Pn3Pvw4LVJrKhiebuLvt/tn32Xtd1+e/Yw8G27QIXW4jrFIjFYtxCsCwcq8RgovLeNN4Leqq0ZpD1dKazj59dX9u2kU6nuXjZAHhXqpwvOnExd4JdaOZOsGkPTFgsFcxOPEtWnGrleUsW5XQXV2cfPxtSUVUVpaWl/F4opq5OXVZckiQhnU5z1847YMy+stIi9v9el6MYuwAJWg9rW6eqKjKZDI9fASCbzfLSKSGuk3RLfD4f97X79u0LAPj00095/MViK+aTe13Frv7kPtMtl7d29MCBAwiFQohGo8jlcl1KWEAntlZrKaEAHKmaTqVSGDJkCEpKSvDaa69hyJAh8Pv9PGD3Nqlsbf3gqdw8p1NhaTEePwsLXnvtNUyePBmXX345Xn/9dSSTyS7XZ6Po0i/e8h6/34+ePXti9uzZqK+vx49+9CPU1tbyWjYmMFZO5B2YPdmXtxTpWK9T3X6xvzr7+P1+P1577TXMnj0bAHDjjTfycCCbzQrL1RYZI2aN2Ndrr70WixcvRnl5OQYPHozq6mqe5NA0jY/jnOrhtJSNOt0qt4vt+Ldv344tW7bAtm3813/9F7773e/y/opdzWsoOnGxIlNmxViW6MCBA1i/fj3uvvtuHDp06JjT5VnaVlC8tNQnw+fz4eqrr8asWbNw8cUXF2SAu1qyqujExVyP5jEUEaGxsRGhUAiJRAKZTIaPdXmrBVrbW0/QSXFIC0kn1sCG9fFgA8je9QWEuE7x6cYCW1Y65H1qNRceyx6eTv0XBEe7o2zKjxDXKZ5Ib2mNruuQJIn3X2CxGHuSed2G060915nmFrKCAG9yqjVdt4S4WoFt20dNx2juMrbkVgqK+IY7QZF0Za+k6MTlLdA0TbOgnqz5LF82zsVE11WfcIL/I5vNwu/3H1Xu1FbjmGe8W8hgqXUWb9m23WKNmXALu7Zb6L3W3hkKwi1sQ7ew+ZKu3hm7bLCzuZvhLfoVdF3xdbWsYJe0XAJArgK+AAAAN0lEQVRBV0YWp0AgEOISCIS4BAKBEJdAIMQlEAhxCQQCIS6BQIhLIBDiEggEQlwCgRCXQNA1+f/hqJKpvh17aQAAAABJRU5ErkJggg=="
              />
            </g>
          </svg>
        </div>
      </va-card-content>
    </va-card>
    <va-card class="col-span-10">
      <va-card-title>{{ t('monitora.botijao.visualizarTitulo') }}</va-card-title>
      <va-card-content>
        <form>
          <div class="grid grid-cols-12 gap-6">
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input v-model="dtoBotijao._id.$oid" placeholder="Identificador do Botijão" label="identificador" />
            </div>
            <div class="col-span-full md:col-span-4 grid grid-cols-1 md:grid-cols-3">
              <fieldset class="flex flex-col">
                <va-switch v-model="dtoBotijao.ativo" label="Ativo" class="mr-8 mb-2" />
              </fieldset>
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12"></div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input v-model="dtoBotijao.nome" placeholder="Texto identificador Botijão" label="Nome" />
            </div>
            <div class="flex md:col-span-8 sm:col-span-6 col-span-12">
              <va-input
                v-model="dtoBotijao.descricao"
                type="textarea"
                placeholder="Campo livre para descrição do botijão"
                label="Descrição"
              >
              </va-input>
            </div>
            <div class="flex md:col-span-4 col-span-12">
              <va-select
                v-model="dtoBotijao.identificadorBalanca"
                label="Identificador Balança"
                searchable
                text-by="description"
                track-by="id"
                :options="simpleOptions"
              />
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input v-model="dtoBotijao.pesoMinimo" type="number" label="Peso Mínimo"> </va-input>
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input v-model="dtoBotijao.pesoMaximo" type="number" label="Peso Máximo"> </va-input>
            </div>
          </div>
        </form>
      </va-card-content>
    </va-card>
    <va-card v-if="lineChartDataGenerated" class="chart-widget col-span-12">
      <va-card-title>{{ t('charts.lineChart') }}</va-card-title>
      <va-card-content>
        <va-chart :data="lineChartDataGenerated" type="line" />
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useChartData } from '../../../../data/charts/composables/useChartData'
  import {
    lineChartData,
    doughnutChartData,
    bubbleChartData,
    pieChartData,
    barChartData,
    horizontalBarChartData,
  } from '../../../../data/charts'
  import VaChart from '../../../../components/va-charts/VaChart.vue'

  const { t } = useI18n()
  const dtoBotijao = ref({
    _id: {
      $oid: '6506fc4545ddf81865da9deb',
    },
    nome: 'Botijão Fazenda 3',
    imagem: 'https://picsum.photos/300/200/?image=1044',
    descricao: 'Botijão da Minha Fazenda 3',
    identificadorBalanca: 'MI SCALE5',
    ativo: true,
    pesoMaximo: 42.8,
    pesoMinimo: 12.6,
  })

  const lineChartDataGenerated = useChartData(lineChartData, 0.7)

  const simpleOptions = ref([
    {
      id: 1,
      description: 'First option',
    },
    {
      id: 2,
      description: 'Second option',
    },
    {
      id: 3,
      description: 'Third option',
    },
  ])
</script>

<style lang="scss" scoped>
  fieldset {
    margin-bottom: 0.5rem;
  }

  .chart-widget {
    .va-card__content {
      height: 300px;
    }
  }
</style>
