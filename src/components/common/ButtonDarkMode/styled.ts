import styled from 'styled-components/macro'


const ButtonDarkModeWrapper = styled("div")`
 position:fixed;
    bottom: 20px;
    right: 20px;   
    #theme-toggle {
        display: none;
        
        & + label {
            font-size: var(--toggle-size);
            display: flex;
            height: var(--switch-h);
            width: var(--switch-w);
            border-radius: calc(var(--switch-h) / 2);
            background-size: auto 8em;
            background-position: bottom;
            background-image: linear-gradient(180deg, #021037 0%, #20206A 19%, #4184B1 66%, #62E7F7 100%);
            transition: var(--switch-transition-duration);
            border: .125em solid hsl(207, 30%, 95%);
            overflow: hidden;
            cursor: pointer; 
            
            span {
                background: #fffad8;
                border-radius: 50%;
                height: var(--switch-h);
                width: var(--switch-h);
                transform: translateX(var(--switch-off-handle-x)) scale(var(--switch-handle-scale));	
                transition: var(--switch-transition-duration);
                cursor: pointer;
                box-shadow: 0 0 .25em .0625em #fbee8d, 0 0 2em 0 #FFEB3B, inset -.25em -.25em 0 0 #fbee8e, inset -.3125em -.3125em 0 .625em #fff5b2;
                margin-top: var(--switch-off-handle-x);
            }
        }
        
        &:checked {
            font-size: var(--switch-font-size);
    
            & + label {
                background-position: top;
                border-color: hsl(207, 30%, 50%);
                
                span {
                    background: transparent;
                    transform: translateX(var(--switch-on-handle-x)) scale(var(--switch-handle-scale));
                    box-shadow: inset -.1875em -.1875em 0 0 #fbe7ef, inset -.5625em -.5625em 0 0 #fffff7;
                }
            }
        }
    }
    

` as any;

export { ButtonDarkModeWrapper };
