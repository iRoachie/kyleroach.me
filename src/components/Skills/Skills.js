import React from 'react';
import styled from 'styled-components';
import { screens } from '../../../tailwind';

import Container from '../Container';
import Skill from './Skill';

export default () => (
  <Skills>
    <Container>
      <Title>
        My <span>Skills</span>
      </Title>

      <Sub>
        With all but 3+ years of experience, staying up to date with the latest
        tools, ensures I'm equipped with the right tools for the job.
      </Sub>

      <Grid>
        <Skill title="React">
          <svg width="70" height="70" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0 4)" fill="#61DAFB" fillRule="nonzero">
              <path d="M69.9004065 31c0-4.610984-5.7906504-8.980778-14.6686992-11.6906178 2.0487805-9.023341 1.1382114-16.20228838-2.8739837-18.50068655-.9247968-.53913043-2.0060976-.794508-3.1869919-.794508v3.16384439c.6544716 0 1.1808943.12768878 1.6219512.36887872 1.9349594 1.10663615 2.7743903 5.32036613 2.1199187 10.74004574-.156504 1.3336385-.4126016 2.7382151-.7256097 4.1711671-2.7886179-.6810069-5.8333334-1.2059497-9.0345529-1.5464531-1.9207317-2.624714-3.9126016-5.008238-5.9186992-7.09382153 4.6382114-4.29885583 8.99187-6.65400458 11.9512195-6.65400458V0c-3.9126016 0-9.0345528 2.78077803-14.2134146 7.60457666C29.7926829 2.80915332 24.6707317.05675057 20.7581301.05675057v3.1638444c2.9451219 0 7.3130081 2.34096109 11.9512195 6.61144164-1.9918699 2.08558349-3.9837398 4.45491989-5.8760163 7.07963389-3.2154471.3405034-6.2601626.8654462-9.0487805 1.5606407-.3272357-1.4187643-.5691056-2.7949657-.7398374-4.1144165-.6686991-5.4196796.1565041-9.63340957 2.0772358-10.75423337.4268293-.25537758.9817073-.36887872 1.6361789-.36887872V.07093821c-1.195122 0-2.2764228.25537758-3.2154472.79450801-3.9979675 2.29839817-4.8943089 9.46315788-2.8313008 18.45812358C5.86178862 22.0475973.0995935 26.4032037.0995935 31c0 4.610984 5.7906504 8.980778 14.6686992 11.6906178-2.0487805 9.023341-1.1382114 16.2022884 2.8739837 18.5006865.9247968.5391305 2.0060976.7945081 3.2012195.7945081 3.9126017 0 9.0345529-2.7807781 14.2134147-7.6045767 5.1788618 4.7954233 10.300813 7.5478261 14.2134146 7.5478261 1.195122 0 2.2764228-.2553776 3.2154472-.794508 3.9979674-2.2983982 4.8943089-9.4631579 2.8313008-18.4581236C64.1382114 39.9665904 69.9004065 35.5967963 69.9004065 31zm-18.5243902-9.4631579c-.5264228 1.830206-1.1808943 3.7171625-1.9207317 5.604119-.5833334-1.1350114-1.195122-2.2700229-1.8638212-3.4050343-.6544715-1.1350115-1.351626-2.2416476-2.0487805-3.3199085 2.0203252.2979405 3.9695122.6668192 5.8333334 1.1208238zm-6.5162602 15.1098398C43.75 38.5620137 42.6117886 40.378032 41.4308943 42.0663616c-2.1199187.1844393-4.2682927.2837528-6.4308943.2837528-2.148374 0-4.296748-.0993135-6.402439-.2695652-1.1808943-1.6883295-2.3333334-3.4901602-3.4430895-5.3913043-1.0813008-1.8585813-2.0630081-3.7455378-2.9593495-5.646682.8821138-1.9011441 1.8780487-3.8022883 2.9451219-5.6608695 1.1097561-1.9153318 2.2479675-3.7313502 3.4288618-5.4196797 2.1199187-.1844393 4.2682927-.2837528 6.4308943-.2837528 2.148374 0 4.296748.0993135 6.402439.2695652 1.1808943 1.6883295 2.3333334 3.4901602 3.4430895 5.3913043 1.0813008 1.8585813 2.0630081 3.7455378 2.9593495 5.646682-.8963414 1.9011441-1.8780487 3.8022883-2.9451219 5.6608695zm4.5955285-1.8443936c.7682926 1.9011442 1.4227642 3.8022884 1.9634146 5.646682-1.8638212.4540045-3.8272358.8370709-5.8617886 1.1350114.6971544-1.0924485 1.3943089-2.2132723 2.0487805-3.3624714.6544715-1.1350114 1.2662601-2.2842105 1.8495935-3.419222zM35.0284553 49.9405034c-1.3231707-1.3620137-2.6463415-2.8800915-3.9552846-4.5400457 1.2804878.0567505 2.5894309.0993135 3.9126017.0993135 1.3373983 0 2.6605691-.0283753 3.9552845-.0993135-1.2804878 1.6599542-2.6036585 3.178032-3.9126016 4.5400457zm-10.5853659-8.3565217c-2.0203252-.2979405-3.9695122-.6668192-5.8333333-1.1208238.5264228-1.830206 1.1808943-3.7171625 1.9207317-5.604119.5833333 1.1350114 1.195122 2.2700229 1.8638211 3.4050343.6686992 1.1350115 1.3516261 2.2416476 2.0487805 3.3199085zm10.5142277-29.5244851c1.3231707 1.3620137 2.6463414 2.8800915 3.9552845 4.5400457-1.2804878-.0567505-2.5894309-.0993135-3.9126016-.0993135-1.3373984 0-2.6605691.0283753-3.9552846.0993135 1.2804879-1.6599542 2.6036586-3.178032 3.9126017-4.5400457zm-10.5284553 8.3565217c-.6971545 1.0924485-1.394309 2.2132723-2.0487805 3.3624714-.6544715 1.1350114-1.2662602 2.2700229-1.8495935 3.4050343-.7682927-1.9011441-1.4227642-3.8022883-1.9634146-5.6466819 1.8638211-.4398169 3.8272357-.8228833 5.8617886-1.1208238zM11.5528455 38.1789474C6.51626016 36.0366133 3.25813008 33.22746 3.25813008 31c0-2.22746 3.25813008-5.0508009 8.29471542-7.1789474 1.2235773-.5249428 2.5609756-.993135 3.9410569-1.4329519.8109756 2.780778 1.8780488 5.6750572 3.2012196 8.6402746-1.3089431 2.9510297-2.3617887 5.8311213-3.1585366 8.5977117-1.4085366-.439817-2.745935-.9221968-3.9837399-1.4471396zm7.6544716 20.2741418c-1.9349594-1.1066361-2.7743903-5.3203661-2.1199187-10.7400457.156504-1.3336385.4126016-2.7382151.7256097-4.1711671 2.7886179.6810069 5.8333334 1.2059497 9.0345529 1.5464531 1.9207317 2.624714 3.9126016 5.008238 5.9186992 7.0938215-4.6382114 4.2988559-8.99187 6.6540046-11.9512195 6.6540046-.640244-.0141876-1.1808944-.1418764-1.6077236-.3830664zm33.7479675-10.8109839c.6686991 5.4196796-.1565041 9.6334096-2.0772358 10.7542334-.4268293.2553775-.9817073.3688787-1.6361789.3688787-2.9451219 0-7.3130081-2.3409611-11.9512195-6.6114417 1.9918699-2.0855835 3.9837398-4.4549199 5.8760163-7.0796338 3.2154471-.3405035 6.2601626-.8654462 9.0487805-1.5606408.3272357 1.432952.5833333 2.8091534.7398374 4.1286042zm5.4776422-9.4631579c-1.2235772.5249428-2.5609756.993135-3.9410569 1.4329519-.8109756-2.780778-1.8780488-5.6750572-3.2012195-8.6402746 1.3089431-2.9510297 2.3617886-5.8311213 3.1585366-8.5977117 1.4085366.439817 2.745935.9221968 3.9979675 1.4471396C63.4837398 25.9633867 66.7418699 28.77254 66.7418699 31c-.0142276 2.22746-3.2723577 5.0508009-8.3089431 7.1789474z" />
              <ellipse
                cx="34.9857724"
                cy="31"
                rx="6.50203252"
                ry="6.48375286"
              />
            </g>
          </svg>
        </Skill>

        <Skill title="JavaScript">
          <svg width="70" height="70" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="nonzero" fill="none">
              <path
                d="M4 0h60.1020408c1.2231293 0 1.2231293 0 1.2231293 1.23030303-.3795919.2969697-.2530613.76363636-.2952381 1.18787879-.6326531 6.78787879-1.2231293 13.53333338-1.8557823 20.27878788-1.1809524 13.1090909-2.2775511 26.1757576-3.4585034 39.2848485-.0421769.6787879-.2952381.9333333-.9278912 1.060606-7.8027211 2.1636364-15.6897959 4.4121213-23.492517 6.6181819-.5482993.1696969-1.0544218.1696969-1.644898 0-7.7605442-2.2484849-15.4367347-4.4121213-23.19727888-6.5757576-.75918367-.169697-1.05442176-.5515152-1.09659863-1.3151515-.63265307-7.5515152-1.307483-15.2303031-1.98231293-22.8242425-.67482993-7.6787878-1.34965986-15.4848484-2.0244898-23.2060606-.4217687-4.6242424-.80136054-9.29090905-1.18095238-13.87272723C4.25306122 1.18787879 4.04217688.63636364 4 0z"
                fill="#FFF"
              />
              <path
                d="M4.15494374 0H64.2569846c1.2231292 0 1.2231292 0 1.2231292 1.23030303-.3795918.2969697-.2530612.76363636-.2952381 1.18787879-.632653 6.78787879-1.2231292 13.53333338-1.8557823 20.27878788-1.1809524 13.1090909-2.277551 26.1757576-3.4585034 39.2848485-.0421769.6787879-.2952381.9333333-.9278912 1.060606-7.802721 2.1636364-15.6897959 4.4121213-23.492517 6.6181819-.5482993.1696969-1.0544217.1696969-1.6448979 0-7.7605442-2.2484849-15.4367347-4.4121213-23.19727893-6.5757576-.75918368-.169697-1.05442177-.5515152-1.09659864-1.3151515-.63265306-7.5515152-1.307483-15.2303031-1.98231293-22.8242425-.67482993-7.6787878-1.34965986-15.4848484-2.02448979-23.2060606-.42176871-4.6242424-.80136055-9.29090905-1.18095239-13.87272723C4.40800497 1.18787879 4.19712062.63636364 4.15494374 0zM34.733175 35.2121212V64.230303c0 .6363637.2530613.6787879.8013606.5515152 6.2843537-1.739394 12.5687075-3.4787879 18.8952381-5.2606061.5061224-.1272727.6748299-.3818182.7591836-.8484848.0421769-.7636364.1265307-1.5272728.1687075-2.2909091.5061225-5.6848485 1.0544218-11.4545455 1.6027211-17.139394.4217687-5.090909.8435374-10.1393939 1.307483-15.230303.5061225-5.6848485 1.0544218-11.4545454 1.6027211-17.13939393.1265306-1.23030303 0-1.35757575-1.2231293-1.35757575H36.1250118c-1.3496599 0-1.3496599 0-1.3496599 1.31515151-.0421769 9.50303027-.0421769 18.92121217-.0421769 28.38181817zm-2.4462585-1.1030303v-19.430303c0-1.1878788 0-1.1878788-1.1809524-1.1878788-1.2231292 0-2.4462585.0424242-3.7115646 0-.8435374-.0424243-1.0965986.169697-1.0965986 1.0606061.0421769 10.0969696 0 20.1090909.0421769 30.2060606 0 .8484848-.1687075.9757575-.9700681.7636363-3.3319728-.9757576-6.7061224-1.8666666-10.0802721-2.8424242-.632653-.169697-.8435374-.0424243-.8013605.6363636.0421768 1.8666667.0421768 3.6484849 0 5.5151515 0 .7636364.2530612.9757576.9278911 1.1878788 5.2721089 1.4848485 10.6285715 2.969697 15.9428572 4.4545455.8013605.1696969.970068.1272727.970068-.7636364-.0421769-6.5333333-.0421769-13.0666667-.0421769-19.6z"
                fill="#D5BA33"
              />
              <path
                d="M34.733175 35.2121212V6.87272727c0-1.31515151 0-1.31515151 1.3496599-1.31515151h22.4380952c1.2231293 0 1.3496599.04242424 1.2231293 1.35757576C59.2379369 12.6 58.6896376 18.369697 58.1413383 24.0545455c-.4217687 5.090909-.8435374 10.1393939-1.307483 15.230303-.5061224 5.6848485-1.0544218 11.4545454-1.6027211 17.1393939-.0421769.7636364-.1687075 1.5272728-.1687075 2.2909091 0 .5090909-.2530612.7636364-.7591836.8484849-6.2843538 1.7393939-12.5687075 3.4787878-18.8952381 5.260606-.5482994.1272728-.8013606.0424243-.8013606-.5515151v-.8060606c.1265306-9.4606061.1265306-18.8363637.1265306-28.2545455zm2.5306123-8.2727273v12.5575758c0 .6363636.1687075.8060606.8013605.6787879 3.585034-.6787879 7.0857143-1.3151515 10.6285715-1.9090909.632653-.1272728.7591836.0424242.6748299.6363636-.1265306 1.5272727-.1687075 3.0121212-.2530612 4.5818182 0 .6787879-.2952381.9757576-.9278912 1.1030303-3.3741497.8484848-6.7482993 1.7818182-10.2068027 2.7151515-.5482993.1272727-.8013606.3818182-.8013606.9333333.0421769 1.9090909.0421769 3.8181819 0 5.769697 0 .5515152.1265306.7636364.7591837.5515152C42.9998417 53.2 48.1032431 51.8848485 53.1222907 50.5272727c.5061224-.1272727.6748299-.2969697.7591837-.8060606.4217687-6.1090909.9278911-12.1757576 1.4340136-18.2424242.0421768-1.1030303.0421768-1.1030303-1.0544218-.9757576-3.3319728.4242424-6.7061225.8060606-10.0380952 1.230303-.8013606.1272728-1.0965987-.0424242-1.0544218-.9333333.0421769-2.969697.0421769-5.9393939 0-8.9090909 0-.8060606.1687075-1.0606061 1.0544218-1.0606061 3.7115646.0424243 7.3809523 0 11.092517.0424243.632653 0 .9278911-.1272728.9278911-.8060606.1265306-1.8666667.2952381-3.7333334.5061225-5.5575758.0421768-.7636364-.1265306-.9333333-.8435375-.9333333-5.9047619 0-11.8095238.0424242-17.7142857 0-.7591836 0-.9278911.2545454-.9278911.9757576v12.3878787z"
                fill="#FED93E"
              />
            </g>
          </svg>
        </Skill>

        <Skill title="HTML5">
          <svg width="70" height="70" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="nonzero" fill="none">
              <path
                fill="#E34F26"
                d="M9.63636364 62.890625L4 0h62l-5.6363636 62.890625L34.9312639 70"
              />
              <path
                fill="#EF652A"
                d="M35.0687361 64.53125l20.4833703-5.6054688 4.81153-53.86718745H35.0687361"
              />
              <path
                d="M35.0687361 28.4375H24.7583149l-.6873615-7.9296875h10.9977827v-7.65625H15.5476718l.1374723 2.0507813 1.924612 21.328125h17.45898V28.4375zm0 20.0976562h-.1374722L26.27051 46.2109375l-.5498892-6.1523437h-7.6984479l.962306 12.1679687 15.946785 4.375h.1374722v-8.0664063z"
                fill="#EBEBEB"
              />
              <path
                d="M34.9312639 28.4375v7.7929688h9.6230598l-.962306 9.9804687-8.6607538 2.3242187v8.0664063l15.9467849-4.375.1374723-1.3671875 1.7871397-20.3710938.2749445-2.0507812H34.9312639zm0-15.5859375v7.65625h18.8337028l.1374723-1.640625.4124169-3.9648437.1374723-2.0507813H34.9312639z"
                fill="#FFF"
              />
            </g>
          </svg>
        </Skill>

        <Skill title="CSS3">
          <svg width="70" height="70" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="nonzero" fill="none">
              <path
                d="M5 .23775399c20.3190643-.00180013 40.636345-.00360026 60.9554094 0C64.837076 12.9916765 63.7365789 25.745599 62.5718713 38.4959213c-.6920467 8.1491895-1.405497 16.2983789-2.1581871 24.442168-4.3359941 1.1592838-8.6291813 2.4805794-12.9633918 3.6452636-3.9810526 1.1790853-7.9942105 2.2465625-11.9770468 3.4166472h-.1177193c-3.7902047-1.1376823-7.6178655-2.1385547-11.4080702-3.276237-4.4733333-1.216888-8.9074269-2.5741862-13.38254382-3.7856738-.58324561-6.1042416-1.1094152-12.2120834-1.62845029-18.3199252-.97921053-11.2850162-2.04403509-22.562832-2.98578947-33.8496484C5.624269 7.37167001 5.39061404 3.96402352 5 .57437834V.23775399zm30.5731287 5.03136393c-.0428071 2.44997722.0321052 4.90175458-.0428071 7.34993168-6.9704093-.0252019-13.9426023-.0054004-20.91301166.0018001.11950293 2.377972.43520466 4.7397428.75982456 7.0979134 6.4852632.2430176 12.9794444-.0090006 19.4647076.1872135-5.6737134 2.5687859-11.4169883 4.9881609-17.1156725 7.5029428-.4887135.2196158-1.0113158.3852278-1.4483041.705651.0481579 2.6119889.4655263 5.2095768.6492398 7.8161654 3.4566666-.012601 6.9115497-.068405 10.3682163-.0738054 2.7699708-.014401 5.5417252.041403 8.3116959-.0198014-.1319883 4.2951107.0410234 8.5956217-.0891812 12.8907324-1.8638889-.2790202-3.7045907-.6984505-5.5613451-1.0314746-1.4643567-.3222233-2.9643859-.4896354-4.4073392-.912666-.2051169-2.0611491-.347807-4.1294987-.5297368-6.1924479-.4173684-.1296094-.8597076-.1170085-1.291345-.124209-2.0939766.0126009-4.1897369-.0072005-6.2854971.0252018.205117 3.9656869.5582749 7.9259733 1.1593567 11.8538574 2.0654386.5436394 4.1344445 1.0764779 6.1963158 1.6435189 3.1588012.8676628 6.3568421 1.589515 9.5209942 2.4427767.376345.0810059.7562573.221416 1.1468713.1890137.2104678 2.6083886.0481579 5.2329785.0873977 7.8485677.7295029-.1188086 1.4465204-.3006218 2.1510526-.5202376 5.9894152-1.6417188 11.9716959-3.3140398 17.9575439-4.9719597.2978655-2.3761719.4369883-4.7685449.6724269-7.1501172.6224853-7.2401237 1.2503216-14.4802474 1.9031286-21.7185709.7651755-8.280599 1.4269006-16.5701986 2.1974269-24.85079756-8.2885088.00720052-16.5752339-.01620117-24.861959.01080078z"
                fill="#0170BA"
              />
              <g fill="#29A9DF">
                <path d="M35.57312823 5.26911734c8.28672514-.02700195 16.57345027-.00360026 24.86195907-.01080078-.7705263 8.28059896-1.4322515 16.57019854-2.1974269 24.85079754-.652807 7.2383236-1.2806433 14.4784472-1.9031287 21.7185709-.2354386 2.3815723-.3745614 4.7739454-.6724269 7.1501172-5.9858479 1.65792-11.96812862 3.3302409-17.95754382 4.9719597-.70453217.2196159-1.42154971.401429-2.15105264.5202376-.03923976-2.6155892.12307018-5.240179-.08739766-7.8485677.05350878-.0108008.16230995-.0324024.21581872-.0432031 5.57026316-1.4113021 11.1030702-2.9648145 16.660848-4.4265202.7027485-7.9565755 1.4821929-15.9095508 1.9762573-23.8823275-4.7266082.0252018-9.45500004.0108008-14.18160823.0306022-.68847953.0036003-1.37695906 0-2.06187134-.0504036 2.54345029-1.3212956 5.21888889-2.3689714 7.83011697-3.5480567 2.5059941-1.1466829 5.0423099-2.2213606 7.5572222-3.346442.4851462-.2250163 1.0023977-.4122298 1.4286842-.7470541.1676608-.6210449.1587427-1.2708919.2247369-1.9063378.1444736-2.0161459.4013158-4.02149093.4976315-6.0394369-6.6939473-.0540039-13.3878947-.00720052-20.08362569-.04320312.07491228-2.44817708 0-4.89995443.04280702-7.34993164z" />
                <path d="M35.60701712 35.8371284c3.23192982-.055804 6.46564327.0324023 9.69935672.0108008-.1801462 3.3356413-.45482456 6.6658821-.62605263 10.0015234-1.98160819.6534473-3.99353801 1.2060873-5.99119883 1.810931-1.06482456.3276237-2.15818713.5868425-3.17128655 1.0674772.13020468-4.2951106-.04280702-8.5956217.08918129-12.8907324z" />
              </g>
              <g fill="#CFCFCF">
                <path d="M14.61730957 12.62084926c6.97040935-.00720053 13.94260233-.02700196 20.91301173-.00180014.0909649 7.7405599-.0231872 15.48111978.0766959 23.21807948-2.7699708.0612044-5.5417252.0054003-8.3116959.0198014-3.4566667.0054004-6.91154974.0612044-10.36821641.0738053-.18371345-2.6065885-.60108187-5.2041764-.64923977-7.8161653.43698831-.3204232.95959065-.4860352 1.4483041-.7056511 5.69868421-2.5147819 11.44195908-4.93415688 17.11567248-7.50294269-6.4852631-.19621419-12.97944441.05580403-19.46470757-.18721354-.32461988-2.35817058-.64032164-4.71994141-.75982456-7.09791341zM17.44257273 40.4922653c2.09576023-.0324024 4.19152046-.0126009 6.28549707-.0252019.43163743.0072006.8739766-.0054003 1.291345.124209.1819299 2.0629493.3246199 4.1312989.5297369 6.1924479 1.4429532.4230306 2.9429824.5904428 4.4073392.9126661 1.8567543.3330241 3.6974561.7524544 5.561345 1.0314746.1783626 2.613789-.1337719 5.2455794.1640936 7.8503678-.0535088.0108008-.16231.0324024-.2158188.0432031-.390614.0324024-.7705263-.1080078-1.1468713-.1890136-3.1641521-.8532618-6.362193-1.575114-9.5209942-2.4427767-2.06187131-.567041-4.13087715-1.0998796-6.19631575-1.6435189-.60108187-3.9278841-.95423977-7.8881706-1.15935672-11.8538574z" />
              </g>
              <path
                d="M35.53032164 12.61904913c6.69573099.0360026 13.38967836-.01080079 20.08362576.04320312-.0963158 2.01794596-.3531579 4.02329102-.4976316 6.03943685-.0659942.63544596-.057076 1.28529297-.2247369 1.90633789-.4262865.33482422-.943538.52203776-1.4286842.74705404-2.5149122 1.12508138-5.051228 2.19975907-7.5572222 3.34644207-2.61122806 1.1790853-5.28666665 2.2267611-7.83011694 3.5480566.68491228.0504037 1.37339181.0540039 2.06187134.0504037 4.72660819-.0198015 9.455-.0054004 14.1816082-.0306022-.4940643 7.9727766-1.2735088 15.9257519-1.9762573 23.8823274-5.5577778 1.4617058-11.09058482 3.0152181-16.66084797 4.4265202-.2978655-2.6047884.014269-5.2365788-.16409357-7.8503678 1.01309941-.4806348 2.10646199-.7398535 3.17128655-1.0674772 1.99766082-.6048438 4.00959064-1.1574838 5.99119883-1.810931.17122807-3.3356413.44590643-6.6658822.62605263-10.0015235-3.23371345.0216016-6.4674269-.0666048-9.69935673-.0108007-.09988304-7.7369597.01426901-15.47751958-.0766959-23.21807947z"
                fill="#FFF"
              />
            </g>
          </svg>
        </Skill>

        <Skill title="React Native">
          <svg width="70" height="70" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0 4)" fill="#028FC3" fillRule="nonzero">
              <path d="M69.9004065 31c0-4.610984-5.7906504-8.980778-14.6686992-11.6906178 2.0487805-9.023341 1.1382114-16.20228838-2.8739837-18.50068655-.9247968-.53913043-2.0060976-.794508-3.1869919-.794508v3.16384439c.6544716 0 1.1808943.12768878 1.6219512.36887872 1.9349594 1.10663615 2.7743903 5.32036613 2.1199187 10.74004574-.156504 1.3336385-.4126016 2.7382151-.7256097 4.1711671-2.7886179-.6810069-5.8333334-1.2059497-9.0345529-1.5464531-1.9207317-2.624714-3.9126016-5.008238-5.9186992-7.09382153 4.6382114-4.29885583 8.99187-6.65400458 11.9512195-6.65400458V0c-3.9126016 0-9.0345528 2.78077803-14.2134146 7.60457666C29.7926829 2.80915332 24.6707317.05675057 20.7581301.05675057v3.1638444c2.9451219 0 7.3130081 2.34096109 11.9512195 6.61144164-1.9918699 2.08558349-3.9837398 4.45491989-5.8760163 7.07963389-3.2154471.3405034-6.2601626.8654462-9.0487805 1.5606407-.3272357-1.4187643-.5691056-2.7949657-.7398374-4.1144165-.6686991-5.4196796.1565041-9.63340957 2.0772358-10.75423337.4268293-.25537758.9817073-.36887872 1.6361789-.36887872V.07093821c-1.195122 0-2.2764228.25537758-3.2154472.79450801-3.9979675 2.29839817-4.8943089 9.46315788-2.8313008 18.45812358C5.86178862 22.0475973.0995935 26.4032037.0995935 31c0 4.610984 5.7906504 8.980778 14.6686992 11.6906178-2.0487805 9.023341-1.1382114 16.2022884 2.8739837 18.5006865.9247968.5391305 2.0060976.7945081 3.2012195.7945081 3.9126017 0 9.0345529-2.7807781 14.2134147-7.6045767 5.1788618 4.7954233 10.300813 7.5478261 14.2134146 7.5478261 1.195122 0 2.2764228-.2553776 3.2154472-.794508 3.9979674-2.2983982 4.8943089-9.4631579 2.8313008-18.4581236C64.1382114 39.9665904 69.9004065 35.5967963 69.9004065 31zm-18.5243902-9.4631579c-.5264228 1.830206-1.1808943 3.7171625-1.9207317 5.604119-.5833334-1.1350114-1.195122-2.2700229-1.8638212-3.4050343-.6544715-1.1350115-1.351626-2.2416476-2.0487805-3.3199085 2.0203252.2979405 3.9695122.6668192 5.8333334 1.1208238zm-6.5162602 15.1098398C43.75 38.5620137 42.6117886 40.378032 41.4308943 42.0663616c-2.1199187.1844393-4.2682927.2837528-6.4308943.2837528-2.148374 0-4.296748-.0993135-6.402439-.2695652-1.1808943-1.6883295-2.3333334-3.4901602-3.4430895-5.3913043-1.0813008-1.8585813-2.0630081-3.7455378-2.9593495-5.646682.8821138-1.9011441 1.8780487-3.8022883 2.9451219-5.6608695 1.1097561-1.9153318 2.2479675-3.7313502 3.4288618-5.4196797 2.1199187-.1844393 4.2682927-.2837528 6.4308943-.2837528 2.148374 0 4.296748.0993135 6.402439.2695652 1.1808943 1.6883295 2.3333334 3.4901602 3.4430895 5.3913043 1.0813008 1.8585813 2.0630081 3.7455378 2.9593495 5.646682-.8963414 1.9011441-1.8780487 3.8022883-2.9451219 5.6608695zm4.5955285-1.8443936c.7682926 1.9011442 1.4227642 3.8022884 1.9634146 5.646682-1.8638212.4540045-3.8272358.8370709-5.8617886 1.1350114.6971544-1.0924485 1.3943089-2.2132723 2.0487805-3.3624714.6544715-1.1350114 1.2662601-2.2842105 1.8495935-3.419222zM35.0284553 49.9405034c-1.3231707-1.3620137-2.6463415-2.8800915-3.9552846-4.5400457 1.2804878.0567505 2.5894309.0993135 3.9126017.0993135 1.3373983 0 2.6605691-.0283753 3.9552845-.0993135-1.2804878 1.6599542-2.6036585 3.178032-3.9126016 4.5400457zm-10.5853659-8.3565217c-2.0203252-.2979405-3.9695122-.6668192-5.8333333-1.1208238.5264228-1.830206 1.1808943-3.7171625 1.9207317-5.604119.5833333 1.1350114 1.195122 2.2700229 1.8638211 3.4050343.6686992 1.1350115 1.3516261 2.2416476 2.0487805 3.3199085zm10.5142277-29.5244851c1.3231707 1.3620137 2.6463414 2.8800915 3.9552845 4.5400457-1.2804878-.0567505-2.5894309-.0993135-3.9126016-.0993135-1.3373984 0-2.6605691.0283753-3.9552846.0993135 1.2804879-1.6599542 2.6036586-3.178032 3.9126017-4.5400457zm-10.5284553 8.3565217c-.6971545 1.0924485-1.394309 2.2132723-2.0487805 3.3624714-.6544715 1.1350114-1.2662602 2.2700229-1.8495935 3.4050343-.7682927-1.9011441-1.4227642-3.8022883-1.9634146-5.6466819 1.8638211-.4398169 3.8272357-.8228833 5.8617886-1.1208238zM11.5528455 38.1789474C6.51626016 36.0366133 3.25813008 33.22746 3.25813008 31c0-2.22746 3.25813008-5.0508009 8.29471542-7.1789474 1.2235773-.5249428 2.5609756-.993135 3.9410569-1.4329519.8109756 2.780778 1.8780488 5.6750572 3.2012196 8.6402746-1.3089431 2.9510297-2.3617887 5.8311213-3.1585366 8.5977117-1.4085366-.439817-2.745935-.9221968-3.9837399-1.4471396zm7.6544716 20.2741418c-1.9349594-1.1066361-2.7743903-5.3203661-2.1199187-10.7400457.156504-1.3336385.4126016-2.7382151.7256097-4.1711671 2.7886179.6810069 5.8333334 1.2059497 9.0345529 1.5464531 1.9207317 2.624714 3.9126016 5.008238 5.9186992 7.0938215-4.6382114 4.2988559-8.99187 6.6540046-11.9512195 6.6540046-.640244-.0141876-1.1808944-.1418764-1.6077236-.3830664zm33.7479675-10.8109839c.6686991 5.4196796-.1565041 9.6334096-2.0772358 10.7542334-.4268293.2553775-.9817073.3688787-1.6361789.3688787-2.9451219 0-7.3130081-2.3409611-11.9512195-6.6114417 1.9918699-2.0855835 3.9837398-4.4549199 5.8760163-7.0796338 3.2154471-.3405035 6.2601626-.8654462 9.0487805-1.5606408.3272357 1.432952.5833333 2.8091534.7398374 4.1286042zm5.4776422-9.4631579c-1.2235772.5249428-2.5609756.993135-3.9410569 1.4329519-.8109756-2.780778-1.8780488-5.6750572-3.2012195-8.6402746 1.3089431-2.9510297 2.3617886-5.8311213 3.1585366-8.5977117 1.4085366.439817 2.745935.9221968 3.9979675 1.4471396C63.4837398 25.9633867 66.7418699 28.77254 66.7418699 31c-.0142276 2.22746-3.2723577 5.0508009-8.3089431 7.1789474z" />
              <ellipse
                cx="34.9857724"
                cy="31"
                rx="6.50203252"
                ry="6.48375286"
              />
            </g>
          </svg>
        </Skill>

        <Skill title="Sketch">
          <svg width="70" height="70" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="nonzero" fill="none">
              <path
                d="M35 66L0 25.55 15.162 5.114 35 3l19.838 2.114L70 25.55z"
                fill="#FFAE00"
              />
              <path d="M35 66L0 25.55h70z" fill="#EC6C00" />
              <path d="M35 66L14.17 25.55h41.66z" fill="#FFAE00" />
              <path d="M35 3L14.17 25.55h41.66z" fill="#FFEFB4" />
              <path
                d="M15.162 5.114L7.368 15.403 0 25.55h14.312zM54.838 5.114l7.794 10.289L70 25.55H55.688z"
                fill="#FFAE00"
              />
              <path
                d="M15.162 5.114L14.17 25.55 35 3zM54.838 5.114l.992 20.436L35 3z"
                fill="#FED305"
              />
            </g>
          </svg>
        </Skill>
      </Grid>
    </Container>
  </Skills>
);

const Title = styled.h2.attrs({
  className: 'my-4 font-light uppercase',
})`
  span {
    font-weight: 600;
  }
`;

const Sub = styled.p.attrs({ className: 'mx-auto' })`
  @media (min-width: ${screens.md}) {
    max-width: 66%;
  }
`;

const Skills = styled.section.attrs({
  className: 'pt-8 pb-4 text-center bg-secondary',
})``;

const Grid = styled.div.attrs({ className: 'mt-16' })`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (min-width: ${screens.sm}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
