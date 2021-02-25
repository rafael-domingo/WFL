import './Title.css';
import Typical from 'react-typical';

function Title({text}) {

    return(       
        <div className="element-title">
            <Typical
            steps={[text]}            
            />
        </div>
    )
//     return (
//         <div className="element-title">
//             <div className="title">
//             <svg width="100%" height="100%" viewBox="0 0 1309 114" version="1.1" xmlns="http://www.w3.org/2000/svg">
//     <title>WHAT’SFORLUNCH?</title>
//     <defs>
//         <path d="M124.65,563 L134.7,532.7 L144.75,563 L169.65,563 L202.65,462.95 L168.75,462.95 L157.2,497.9 L145.65,462.95 L123.75,462.95 L112.2,497.9 L100.65,462.95 L66.75,462.95 L99.75,563 L124.65,563 Z M114.75,551 L111,551 L85.95,474.95 L90,474.95 L112.8,544.1 L134.7,474.95 L156.6,544.1 L179.4,474.95 L183.45,474.95 L158.4,551 L154.65,551 L134.7,488.15 L114.75,551 Z M236.85,563 L236.85,525.95 L254.7,525.95 L254.7,563 L286.8,563 L286.8,462.95 L254.7,462.95 L254.7,497 L236.85,497 L236.85,462.95 L204.9,462.95 L204.9,563 L236.85,563 Z M223.8,551 L219.9,551 L219.9,474.95 L223.8,474.95 L223.8,509.45 L267.9,509.45 L267.9,474.95 L271.8,474.95 L271.8,551 L267.9,551 L267.9,513.05 L223.8,513.05 L223.8,551 Z M320.55,563 L323.85,554 L354.15,554 L357.45,563 L388.95,563 L351,462.95 L327,462.95 L289.05,563 L320.55,563 Z M311.4,551 L307.2,551 L336.15,474.95 L341.85,474.95 L370.8,551 L366.6,551 L363.75,543.5 L314.25,543.5 L311.4,551 Z M362.4,539.9 L339,478.55 L315.6,539.9 L362.4,539.9 Z M345.75,531.95 L332.25,531.95 L339,514.4 L345.75,531.95 Z M426.15,563 L426.15,489.2 L444.6,489.2 L444.6,462.95 L374.7,462.95 L374.7,489.2 L393.15,489.2 L393.15,563 L426.15,563 Z M411.6,551 L407.7,551 L407.7,478.55 L386.25,478.55 L386.25,474.95 L433.05,474.95 L433.05,478.55 L411.6,478.55 L411.6,551 Z M470.1,503.45 L486.15,462.95 L457.65,462.95 L444.6,503.45 L470.1,503.45 Z M460.8,497.45 L457.05,497.45 L468.3,468.95 L472.05,468.95 L460.8,497.45 Z M513.6,565.55 C519.9,565.55 525.35,564.725 529.95,563.075 C534.55,561.425 538.325,559.175 541.275,556.325 C544.225,553.475 546.4,550.125 547.8,546.275 C549.2,542.425 549.9,538.3 549.9,533.9 C549.9,529.7 549.225,525.9 547.875,522.5 C546.525,519.1 544.875,516.05 542.925,513.35 C540.975,510.65 538.825,508.25 536.475,506.15 C534.125,504.05 531.975,502.2 530.025,500.6 C528.075,499 526.425,497.6 525.075,496.4 C523.725,495.2 523.05,494.2 523.05,493.4 C523.05,492.5 523.35,491.8 523.95,491.3 C524.55,490.8 525.25,490.45 526.05,490.25 C526.85,490.05 527.7,489.925 528.6,489.875 C529.5,489.825 530.25,489.8 530.85,489.8 C531.95,489.8 533,489.85 534,489.95 C535,490.05 535.9,490.15 536.7,490.25 C537.7,490.35 538.6,490.45 539.4,490.55 L539.4,490.55 L539.4,462.5 C537.3,462.2 535.15,461.9 532.95,461.6 C531.05,461.4 528.9,461.175 526.5,460.925 C524.1,460.675 521.7,460.55 519.3,460.55 C514.7,460.55 510.375,461.175 506.325,462.425 C502.275,463.675 498.75,465.5 495.75,467.9 C492.75,470.3 490.4,473.3 488.7,476.9 C487,480.5 486.15,484.65 486.15,489.35 C486.15,493.55 486.85,497.275 488.25,500.525 C489.65,503.775 491.425,506.7 493.575,509.3 C495.725,511.9 498.025,514.2 500.475,516.2 C502.925,518.2 505.225,520.025 507.375,521.675 C509.525,523.325 511.3,524.825 512.7,526.175 C514.1,527.525 514.8,528.85 514.8,530.15 C514.8,533.55 512.5,535.25 507.9,535.25 C505.3,535.25 502.725,535.1 500.175,534.8 C497.625,534.5 495.35,534.1 493.35,533.6 C490.95,533.2 488.65,532.65 486.45,531.95 L486.45,531.95 L486.45,561.95 C488.85,562.65 491.5,563.25 494.4,563.75 C496.9,564.25 499.775,564.675 503.025,565.025 C506.275,565.375 509.8,565.55 513.6,565.55 Z M512.7,551.45 C511.1,551.45 509.525,551.375 507.975,551.225 C506.425,551.075 504.95,550.9 503.55,550.7 C501.95,550.5 500.45,550.25 499.05,549.95 L499.05,549.95 L499.05,546.05 C500.45,546.35 501.9,546.6 503.4,546.8 C506.2,547.3 509.3,547.55 512.7,547.55 C518.4,547.55 522.875,546.3 526.125,543.8 C529.375,541.3 531,537.65 531,532.85 C531,530.25 530.275,527.75 528.825,525.35 C527.375,522.95 525.525,520.625 523.275,518.375 C521.025,516.125 518.625,513.9 516.075,511.7 C513.525,509.5 511.125,507.225 508.875,504.875 C506.625,502.525 504.775,500.125 503.325,497.675 C501.875,495.225 501.15,492.6 501.15,489.8 C501.15,484.6 502.9,480.775 506.4,478.325 C509.9,475.875 514.35,474.65 519.75,474.65 C520.65,474.65 521.525,474.675 522.375,474.725 C523.225,474.775 524,474.85 524.7,474.95 C525.5,475.05 526.25,475.1 526.95,475.1 L526.95,475.1 L526.95,479 C526.15,479 525.35,478.95 524.55,478.85 C523.75,478.75 522.925,478.675 522.075,478.625 C521.225,478.575 520.4,478.55 519.6,478.55 C514.5,478.55 510.8,479.525 508.5,481.475 C506.2,483.425 505.05,486.2 505.05,489.8 C505.05,492.2 505.775,494.525 507.225,496.775 C508.675,499.025 510.525,501.275 512.775,503.525 C515.025,505.775 517.425,508 519.975,510.2 C522.525,512.4 524.925,514.7 527.175,517.1 C529.425,519.5 531.275,522 532.725,524.6 C534.175,527.2 534.9,529.95 534.9,532.85 C534.9,536.25 534.275,539.125 533.025,541.475 C531.775,543.825 530.1,545.75 528,547.25 C525.9,548.75 523.525,549.825 520.875,550.475 C518.225,551.125 515.5,551.45 512.7,551.45 Z M618.6,563 L618.6,525.2 L645.15,525.2 L645.15,500.3 L618.6,500.3 L618.6,489.2 L645.6,489.2 L645.6,462.95 L586.65,462.95 L586.65,563 L618.6,563 Z M605.55,551 L601.65,551 L601.65,474.95 L635.55,474.95 L635.55,478.55 L605.55,478.55 L605.55,510.95 L634.05,510.95 L634.05,514.55 L605.55,514.55 L605.55,551 Z M703.35,565.55 C710.55,565.55 717.35,564.175 723.75,561.425 C730.15,558.675 735.725,554.925 740.475,550.175 C745.225,545.425 748.975,539.85 751.725,533.45 C754.475,527.05 755.85,520.25 755.85,513.05 C755.85,505.85 754.475,499.05 751.725,492.65 C748.975,486.25 745.225,480.675 740.475,475.925 C735.725,471.175 730.15,467.425 723.75,464.675 C717.35,461.925 710.55,460.55 703.35,460.55 C696.15,460.55 689.35,461.925 682.95,464.675 C676.55,467.425 670.975,471.175 666.225,475.925 C661.475,480.675 657.725,486.25 654.975,492.65 C652.225,499.05 650.85,505.85 650.85,513.05 C650.85,520.25 652.225,527.05 654.975,533.45 C657.725,539.85 661.475,545.425 666.225,550.175 C670.975,554.925 676.55,558.675 682.95,561.425 C689.35,564.175 696.15,565.55 703.35,565.55 Z M703.35,551.45 C698.05,551.45 693.075,550.45 688.425,548.45 C683.775,546.45 679.7,543.7 676.2,540.2 C672.7,536.7 669.95,532.625 667.95,527.975 C665.95,523.325 664.95,518.35 664.95,513.05 C664.95,507.75 665.95,502.775 667.95,498.125 C669.95,493.475 672.7,489.4 676.2,485.9 C679.7,482.4 683.775,479.65 688.425,477.65 C693.075,475.65 698.05,474.65 703.35,474.65 C708.65,474.65 713.625,475.65 718.275,477.65 C722.925,479.65 727,482.4 730.5,485.9 C734,489.4 736.75,493.475 738.75,498.125 C740.75,502.775 741.75,507.75 741.75,513.05 C741.75,518.35 740.75,523.325 738.75,527.975 C736.75,532.625 734,536.7 730.5,540.2 C727,543.7 722.925,546.45 718.275,548.45 C713.625,550.45 708.65,551.45 703.35,551.45 Z M703.35,547.55 C708.15,547.55 712.625,546.65 716.775,544.85 C720.925,543.05 724.575,540.575 727.725,537.425 C730.875,534.275 733.35,530.625 735.15,526.475 C736.95,522.325 737.85,517.85 737.85,513.05 C737.85,508.25 736.95,503.775 735.15,499.625 C733.35,495.475 730.875,491.825 727.725,488.675 C724.575,485.525 720.925,483.05 716.775,481.25 C712.625,479.45 708.15,478.55 703.35,478.55 C698.55,478.55 694.075,479.45 689.925,481.25 C685.775,483.05 682.125,485.525 678.975,488.675 C675.825,491.825 673.35,495.475 671.55,499.625 C669.75,503.775 668.85,508.25 668.85,513.05 C668.85,517.85 669.75,522.325 671.55,526.475 C673.35,530.625 675.825,534.275 678.975,537.425 C682.125,540.575 685.775,543.05 689.925,544.85 C694.075,546.65 698.55,547.55 703.35,547.55 Z M703.35,534.05 C700.45,534.05 697.725,533.5 695.175,532.4 C692.625,531.3 690.4,529.8 688.5,527.9 C686.6,526 685.1,523.775 684,521.225 C682.9,518.675 682.35,515.95 682.35,513.05 C682.35,510.15 682.9,507.425 684,504.875 C685.1,502.325 686.6,500.1 688.5,498.2 C690.4,496.3 692.625,494.8 695.175,493.7 C697.725,492.6 700.45,492.05 703.35,492.05 C706.25,492.05 708.975,492.6 711.525,493.7 C714.075,494.8 716.3,496.3 718.2,498.2 C720.1,500.1 721.6,502.325 722.7,504.875 C723.8,507.425 724.35,510.15 724.35,513.05 C724.35,515.95 723.8,518.675 722.7,521.225 C721.6,523.775 720.1,526 718.2,527.9 C716.3,529.8 714.075,531.3 711.525,532.4 C708.975,533.5 706.25,534.05 703.35,534.05 Z M796.05,563 L796.05,537.65 L811.05,563 L848.55,563 L829.8,530 C832.3,528.2 834.55,526 836.55,523.4 C838.25,521.1 839.8,518.2 841.2,514.7 C842.6,511.2 843.3,506.95 843.3,501.95 C843.3,495.65 842.175,490.075 839.925,485.225 C837.675,480.375 834.55,476.3 830.55,473 C826.55,469.7 821.825,467.2 816.375,465.5 C810.925,463.8 805,462.95 798.6,462.95 L798.6,462.95 L764.1,462.95 L764.1,563 L796.05,563 Z M783,551 L779.1,551 L779.1,474.95 L795.3,474.95 C800,474.95 804.35,475.525 808.35,476.675 C812.35,477.825 815.825,479.525 818.775,481.775 C821.725,484.025 824.05,486.8 825.75,490.1 C827.45,493.4 828.3,497.25 828.3,501.65 C828.3,507.95 826.7,513.075 823.5,517.025 C820.3,520.975 816,523.9 810.6,525.8 L810.6,525.8 L825.6,551 L820.95,551 L806.7,527 C803,527.8 799.2,528.2 795.3,528.2 L795.3,528.2 L783,528.2 L783,551 Z M795.3,524.6 C804.4,524.6 811.525,522.625 816.675,518.675 C821.825,514.725 824.4,509.05 824.4,501.65 C824.4,494.25 821.825,488.55 816.675,484.55 C811.525,480.55 804.4,478.55 795.3,478.55 L795.3,478.55 L783,478.55 L783,524.6 L795.3,524.6 Z M797.7,512.15 L796.05,512.15 L796.05,489.95 L797.7,489.95 C801.5,489.95 804.725,490.8 807.375,492.5 C810.025,494.2 811.35,497.05 811.35,501.05 C811.35,505.05 810.025,507.9 807.375,509.6 C804.725,511.3 801.5,512.15 797.7,512.15 L797.7,512.15 Z M942.45,563 L942.45,536.75 L914.85,536.75 L914.85,462.95 L881.55,462.95 L881.55,563 L942.45,563 Z M934.05,551 L896.55,551 L896.55,474.95 L900.45,474.95 L900.45,547.4 L934.05,547.4 L934.05,551 Z M986.4,565.55 C992.7,565.55 998.4,564.75 1003.5,563.15 C1008.6,561.55 1012.975,559.15 1016.625,555.95 C1020.275,552.75 1023.075,548.7 1025.025,543.8 C1026.975,538.9 1027.95,533.15 1027.95,526.55 L1027.95,526.55 L1027.95,462.95 L995.85,462.95 L995.85,525.2 C995.85,528.7 995.125,531.375 993.675,533.225 C992.225,535.075 989.8,536 986.4,536 C983,536 980.575,535.075 979.125,533.225 C977.675,531.375 976.95,528.7 976.95,525.2 L976.95,525.2 L976.95,462.95 L945,462.95 L945,526.55 C945,533.15 945.975,538.9 947.925,543.8 C949.875,548.7 952.65,552.75 956.25,555.95 C959.85,559.15 964.2,561.55 969.3,563.15 C974.4,564.75 980.1,565.55 986.4,565.55 Z M986.4,551.45 C977.9,551.45 971.375,549.225 966.825,544.775 C962.275,540.325 960,533.9 960,525.5 L960,525.5 L960,474.95 L963.9,474.95 L963.9,525.5 C963.9,540.2 971.4,547.55 986.4,547.55 C1001.4,547.55 1008.9,540.2 1008.9,525.5 L1008.9,525.5 L1008.9,474.95 L1012.95,474.95 L1012.95,525.5 C1012.95,533.9 1010.65,540.325 1006.05,544.775 C1001.45,549.225 994.9,551.45 986.4,551.45 Z M1069.35,563 L1069.35,524.6 L1096.8,563 L1123.2,563 L1123.2,462.95 L1091.85,462.95 L1091.85,501.5 L1064.25,462.95 L1038,462.95 L1038,563 L1069.35,563 Z M1055.85,551 L1051.95,551 L1051.95,474.95 L1055.85,474.95 L1105.35,544.25 L1105.35,474.95 L1109.25,474.95 L1109.25,551 L1105.35,551 L1055.85,481.7 L1055.85,551 Z M1185.45,565.55 C1191.25,565.55 1196.4,564.95 1200.9,563.75 C1205.4,562.55 1209.25,561.25 1212.45,559.85 C1216.15,558.15 1219.35,556.2 1222.05,554 L1222.05,554 L1206.3,526.25 C1204.8,527.75 1203.05,529.05 1201.05,530.15 C1199.35,531.15 1197.25,532.05 1194.75,532.85 C1192.25,533.65 1189.4,534.05 1186.2,534.05 C1183,534.05 1180.05,533.5 1177.35,532.4 C1174.65,531.3 1172.3,529.8 1170.3,527.9 C1168.3,526 1166.725,523.775 1165.575,521.225 C1164.425,518.675 1163.85,515.95 1163.85,513.05 C1163.85,510.15 1164.4,507.425 1165.5,504.875 C1166.6,502.325 1168.125,500.1 1170.075,498.2 C1172.025,496.3 1174.3,494.8 1176.9,493.7 C1179.5,492.6 1182.35,492.05 1185.45,492.05 C1188.45,492.05 1191.125,492.425 1193.475,493.175 C1195.825,493.925 1197.85,494.7 1199.55,495.5 C1201.45,496.6 1203.2,497.75 1204.8,498.95 L1204.8,498.95 L1220.55,471.2 C1217.85,469.3 1214.65,467.55 1210.95,465.95 C1207.75,464.55 1203.925,463.3 1199.475,462.2 C1195.025,461.1 1189.95,460.55 1184.25,460.55 C1177.05,460.55 1170.25,461.775 1163.85,464.225 C1157.45,466.675 1151.85,470.2 1147.05,474.8 C1142.25,479.4 1138.45,484.925 1135.65,491.375 C1132.85,497.825 1131.45,505.05 1131.45,513.05 C1131.45,520.85 1132.8,527.975 1135.5,534.425 C1138.2,540.875 1141.95,546.4 1146.75,551 C1151.55,555.6 1157.25,559.175 1163.85,561.725 C1170.45,564.275 1177.65,565.55 1185.45,565.55 Z M1185.9,551.45 C1180.5,551.45 1175.4,550.55 1170.6,548.75 C1165.8,546.95 1161.6,544.375 1158,541.025 C1154.4,537.675 1151.575,533.65 1149.525,528.95 C1147.475,524.25 1146.45,518.95 1146.45,513.05 C1146.45,507.25 1147.525,501.975 1149.675,497.225 C1151.825,492.475 1154.675,488.425 1158.225,485.075 C1161.775,481.725 1165.875,479.15 1170.525,477.35 C1175.175,475.55 1180.05,474.65 1185.15,474.65 C1188.05,474.65 1190.6,474.85 1192.8,475.25 C1195,475.65 1196.95,476.1 1198.65,476.6 C1200.45,477.2 1202.15,477.85 1203.75,478.55 L1203.75,478.55 L1201.65,482.15 C1200.45,481.45 1199,480.85 1197.3,480.35 C1195.9,479.85 1194.175,479.425 1192.125,479.075 C1190.075,478.725 1187.75,478.55 1185.15,478.55 C1179.85,478.55 1175.05,479.45 1170.75,481.25 C1166.45,483.05 1162.8,485.5 1159.8,488.6 C1156.8,491.7 1154.475,495.35 1152.825,499.55 C1151.175,503.75 1150.35,508.25 1150.35,513.05 C1150.35,517.85 1151.175,522.35 1152.825,526.55 C1154.475,530.75 1156.825,534.4 1159.875,537.5 C1162.925,540.6 1166.65,543.05 1171.05,544.85 C1175.45,546.65 1180.4,547.55 1185.9,547.55 C1188.7,547.55 1191.15,547.325 1193.25,546.875 C1195.35,546.425 1197.15,545.9 1198.65,545.3 C1200.35,544.7 1201.85,543.95 1203.15,543.05 L1203.15,543.05 L1205.25,546.65 C1203.75,547.55 1202.05,548.35 1200.15,549.05 C1198.45,549.65 1196.4,550.2 1194,550.7 C1191.6,551.2 1188.9,551.45 1185.9,551.45 Z M1257.75,563 L1257.75,525.95 L1275.6,525.95 L1275.6,563 L1307.7,563 L1307.7,462.95 L1275.6,462.95 L1275.6,497 L1257.75,497 L1257.75,462.95 L1225.8,462.95 L1225.8,563 L1257.75,563 Z M1244.7,551 L1240.8,551 L1240.8,474.95 L1244.7,474.95 L1244.7,509.45 L1288.8,509.45 L1288.8,474.95 L1292.7,474.95 L1292.7,551 L1288.8,551 L1288.8,513.05 L1244.7,513.05 L1244.7,551 Z M1351.2,533.45 C1351.2,529.85 1352.075,526.45 1353.825,523.25 C1355.575,520.05 1357.5,516.8 1359.6,513.5 C1361.7,510.2 1363.625,506.775 1365.375,503.225 C1367.125,499.675 1368,495.7 1368,491.3 C1368,486.7 1367.1,482.5 1365.3,478.7 C1363.5,474.9 1360.975,471.65 1357.725,468.95 C1354.475,466.25 1350.55,464.175 1345.95,462.725 C1341.35,461.275 1336.2,460.55 1330.5,460.55 C1329.1,460.55 1327.875,460.575 1326.825,460.625 C1325.775,460.675 1324.7,460.75 1323.6,460.85 C1322.5,460.95 1321.275,461.1 1319.925,461.3 C1318.575,461.5 1317,461.75 1315.2,462.05 L1315.2,462.05 L1315.2,489.95 L1318.35,489.95 C1320.25,489.95 1322.075,490.05 1323.825,490.25 C1325.575,490.45 1327.1,490.875 1328.4,491.525 C1329.7,492.175 1330.75,493.075 1331.55,494.225 C1332.35,495.375 1332.75,496.9 1332.75,498.8 C1332.75,500.9 1332.05,503 1330.65,505.1 C1329.25,507.2 1327.7,509.575 1326,512.225 C1324.3,514.875 1322.75,517.9 1321.35,521.3 C1319.95,524.7 1319.25,528.75 1319.25,533.45 L1319.25,533.45 L1351.2,533.45 Z M1339.2,524 L1335.6,524 C1335.6,522.1 1336.25,519.95 1337.55,517.55 C1338.85,515.15 1340.275,512.6 1341.825,509.9 C1343.375,507.2 1344.8,504.425 1346.1,501.575 C1347.4,498.725 1348.05,495.85 1348.05,492.95 C1348.05,490.45 1347.575,488.275 1346.625,486.425 C1345.675,484.575 1344.4,483.075 1342.8,481.925 C1341.2,480.775 1339.35,479.925 1337.25,479.375 C1335.15,478.825 1332.95,478.55 1330.65,478.55 L1330.65,478.55 L1326.75,478.55 L1326.75,474.95 L1330.65,474.95 C1337.85,474.95 1343.15,476.6 1346.55,479.9 C1349.95,483.2 1351.65,487.55 1351.65,492.95 C1351.65,495.75 1351,498.6 1349.7,501.5 C1348.4,504.4 1346.975,507.225 1345.425,509.975 C1343.875,512.725 1342.45,515.3 1341.15,517.7 C1339.85,520.1 1339.2,522.2 1339.2,524 L1339.2,524 Z M1351.35,563 L1351.35,537.95 L1319.25,537.95 L1319.25,563 L1351.35,563 Z M1342.35,552.2 L1328.25,552.2 L1328.25,548.75 L1342.35,548.75 L1342.35,552.2 Z" id="path-1"></path>
//         <filter x="-0.5%" y="-4.8%" width="101.1%" height="113.3%" filterUnits="objectBoundingBox" id="filter-2">
//             <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
//             <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
//             <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
//         </filter>
//     </defs>
//     <g id="Title" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
//         <g id="Desktop-HD" transform="translate(-63.000000, -458.000000)" fillRule="nonzero">
//             <g id="WHAT’SFORLUNCH?">
//                 <use fill="black" fillOpacity="1" filter="url(#filter-2)" xlinkHref="#path-1"></use>
//                 <use fill="#FFFFFF" xlinkHref="#path-1"></use>
//             </g>
//         </g>
//     </g>
// </svg>
//             </div>

//         </div>
       
//     )
}

export default Title;