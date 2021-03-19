<template>
  <div class="maincontent" id="maincon">
    <!-- 动态背景绘制，由于一个不能铺满页面所以绘制了10个 -->
    <div class="backcanvas">
      <particles-bg type="color" :num="4"  id="canvas" />
      <particles-bg type="color" :num="4"  id="two" />
      <particles-bg type="color" :num="4"  id="three" />
      <particles-bg type="color" :num="4"  id="four" />
      <particles-bg type="color" :num="4"  id="five" />
      <particles-bg type="color" :num="4"  id="six" />
      <particles-bg type="color" :num="4"  id="seven" />
      <particles-bg type="color" :num="4"  id="eight" />
      <particles-bg type="color" :num="4"  id="nine" />
    </div>
    <!-- 快速返回顶部 -->
    <el-backtop>
    </el-backtop>
    <!-- 搜索框部分 -->
    <el-row class="searchRow">
      <el-col :span="24">
        <div class="search">
          <h1>Inspiral Search</h1>
          <div class="content" 
            v-loading="loading"
            element-loading-background="rgba(255, 255, 255, 0.5)">
            <!-- <button @click="handleClick">ClickGet</button> -->
            <el-input 
              type="text" 
              v-model="searchVal"
              @keydown.enter.native="searchEnterFun">
              <i 
                slot="suffix" 
                class="el-input__icon el-icon-microphone"
                @click="voiceInput">
                <span class="tooltiptext">Search By Speech</span>
              </i>
              <i 
                slot="suffix" 
                class="el-input__icon el-icon-search"
                @click="searchEnterFun">
              </i>
            </el-input>
          </div>
        </div>
      </el-col>
    </el-row>
<div id="app">

<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">

  <el-button size="small" type="primary">Provide Your Idea!</el-button>
</el-upload>

</div>
    <!-- 结果显示部分，目前是关于Blockchain的Result，可以在后面复制添加其他的Result -->
    <el-row :gutter="60" v-show="showResult">
      <el-col :span="20" :offset="2">
        <!-- tab,这里的hideLinesOrNot是因为LeaderLines插件是画在屏幕上的，所以切换时不会自动清除，因此设置method，当tab页id变化时清除line -->
        <el-tabs type="border-card" closable @tab-click="hideLinesOrNot">
          <el-tab-pane label="Solution1">
            <el-row :gutter="60" type="flex" justify="center" v-show="showblockchain" class="titlerow">
                  <el-col :span="3">
                    <h4>META</h4>
                  </el-col>
                  <el-col :span="3">
                    <h4>INGEST</h4>
                  </el-col>
                  <el-col :span="3">
                    <h4>TANSFORM</h4>
                  </el-col>
                  <el-col :span="3">
                    <h4>ATTEST</h4>
                  </el-col>
                  <el-col :span="12">
                    <h4>READ AND ROUTE</h4>
                  </el-col>
            </el-row>
            <el-row :gutter="60" type="flex" justify="center" align="middle" v-show="showblockchain" class="bigrow">
                  <el-col :span="3">
                    <div ref="rsensors" class="eleDivSensor">
                      <img :src="IoTHub">
                      <p>Sensors and IoT</p>
                    </div>
                    <div class="medis-file">
                      <div ref="rmedia" class="eleDiv">
                        <img :src="media">
                        <p>Media</p>
                      </div>
                      <div ref="rfile" class="eleDiv">
                        <img :src="file">
                        <p>Files</p>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="3">
                    <div ref="rcentral" class="eleDivIoT" @click="toIoTCentral" @mouseenter="cpointer($event)">
                      <img :src="IoTCentral">
                      <p>IoT Central</p>
                    </div>
                    <div class="eleDiv" ref="rservice" @click="toServiceBus" @mouseenter="cpointer($event)">
                      <img :src="service">
                      <p>Service Bus<br></p>
                    </div>
                  </el-col>
                  <el-col :span="3">
                    <div class="eleDiv" ref="rbuilder">
                      <img :src="builder">
                      <p>Transaction Builder</p>
                    </div>
                  </el-col>
                  <el-col :span="3">
                    <div class="eleDiv" ref="rblockchain" @click="toBlockService" @mouseenter="cpointer($event)">
                      <img :src="blockservice">
                      <p>Azure Blockchain Service</p>
                    </div>
                  </el-col>
                  <el-col :span="3">
                    <div class="eleDiv" ref="rmanager" @click="toBlockService" @mouseenter="cpointer($event)">
                      <img :src="datamanager">
                      <p>Blockchain Data Manager</p>
                    </div>
                  </el-col>
                  <el-col :span="3">
                    <div class="eleDiv" ref="rgrid" @click="toEventDemo" @mouseenter="cpointer($event)">
                      <img :src="grid">
                      <p>Event Grid</p>
                    </div>
                  </el-col>
                  <el-col :span="3">
                    <div ref="rentire">
                      <div ref="rlogic" class="eleDiv" @click="toLogicDemo" @mouseenter="cpointer($event)">
                        <img :src="logic">
                        <p>Logic Apps</p>
                      </div>
                      <div ref="rfunctions" class="eleDiv" @click="toFunctionsDemo" @mouseenter="cpointer($event)">
                        <img :src="functions">
                        <p>Functions</p>
                      </div>
                      <div ref="rsql" class="eleDiv" @click="toSqlDemo" @mouseenter="cpointer($event)">
                        <img :src="sql">
                        <p>SQL</p>
                      </div>
                      <div ref="rcosmos" class="eleDiv" @click="toCosmosDemo" @mouseenter="cpointer($event)">
                        <img :src="cosmos">
                        <p>Cosmos DB</p>
                      </div>
                      <div ref="rmysql" class="eleDiv" @click="toMysqlDemo" @mouseenter="cpointer($event)">
                        <img :src="mysql">
                        <p>MySQL</p>
                      </div>
                      <div ref="rpostgre" class="eleDiv" @click="toPostgresqlDemo" @mouseenter="cpointer($event)">
                        <img :src="postgre">
                        <p>PostgreSQL</p>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="3">
                    <div class="machine-explorer" ref="rmaex">
                      <div class="eleDiv" @click="toMachineDemo" @mouseenter="cpointer($event)">
                        <img :src="machine">
                        <p>Machine Learning Studio</p>
                      </div>
                      <div class="eleDiv">
                        <img :src="explorer" @click="toDataExplorerDemo" @mouseenter="cpointer($event)">
                        <p>Azure Data Explorer</p>
                      </div>
                    </div>
                  </el-col>


            </el-row>
            <!-- demo部分col自适应 -->
            <div v-show="showdemo">
              <el-row :gutter="60" id="IoTCentralDemo" type="flex" justify="center" align="middle" class="bigrow">
                <el-col :xs="10.5" :sm="11" :md="11.5" :lg="12">
                  <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="IoTPlayerOptions">
                  </video-player>
                </el-col>
                <el-col :xs="14.5" :sm="13" :md="12.5" :lg="12">
                  <p class="introduce">
                    IoT Central is an IoT application platform that reduces the burden and cost of developing, managing, and maintaining enterprise-grade IoT solutions. Choosing to build with IoT Central gives you the opportunity to focus time, money, and energy on transforming your business with IoT data, rather than just maintaining and updating a complex and continually evolving IoT infrastructure.
                    <br>
                    The web UI lets you monitor device conditions, create rules, and manage millions of devices and their data throughout their life cycle. Furthermore, it enables you to act on device insights by extending IoT intelligence into line-of-business applications.
                    <br>
                    <br>
                    <el-link href="https://docs.microsoft.com/zh-cn/azure/iot-central/" icon="el-icon-document" type="info" class="docslink">Docs</el-link>
                    <el-link href="https://github.com/Azure-Samples/azure-iot-samples-csharp" icon="el-icon-data-board" type="info" class="demolink">Demo</el-link>
                  </p>
                </el-col>
              </el-row>
              <el-row :gutter="60" id="serviceBusDemo" type="flex" justify="center" align="middle" class="bigrow">
                <el-col :xs="10.5" :sm="11" :md="11.5" :lg="12">
                  <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="servicePlayerOptions">
                  </video-player>
                </el-col>
                <el-col :xs="14.5" :sm="13" :md="12.5" :lg="12">
                  <p class="introduce">
                    Microsoft Azure Service Bus is a fully managed enterprise message broker with message queues and publish-subscribe topics. Service Bus is used to decouple applications and services from each other, providing the following benefits:
                    <ul>
                      <li>Load-balancing work across competing workers</li>
                      <li>Safely routing and transferring data and control across service and application boundaries</li>
                      <li>Coordinating transactional work that requires a high-degree of reliability</li>
                    </ul>
                    <el-link href="https://docs.microsoft.com/zh-cn/azure/service-bus-messaging/" icon="el-icon-document" type="info" class="docslink">Docs</el-link>
                    <el-link href="https://github.com/Azure/azure-service-bus" icon="el-icon-data-board" type="info" class="demolink">Demo</el-link>
                  </p>
                </el-col>
              </el-row>
              <el-row :gutter="60" id="blockchainServiceDemo" type="flex" justify="center" align="middle" class="bigrow">
                <el-col :xs="10.5" :sm="11" :md="11.5" :lg="12">
                  <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="blockPlayerOptions">
                  </video-player>
                </el-col>
                <el-col :xs="14.5" :sm="13" :md="12.5" :lg="12">
                  <p class="introduce">
                    Azure Blockchain Service is a fully managed ledger service that gives users the ability to grow and operate blockchain networks at scale in Azure. By providing unified control for both infrastructure management as well as blockchain network governance, Azure Blockchain Service provides:
                    <ul>
                      <li>Simple network deployment and operations</li>
                      <li>Built-in consortium management</li>
                      <li>Develop smart contracts with familiar development tools</li>
                    </ul>
                    Azure Blockchain Service is designed to support multiple ledger protocols. Currently, it provides support for the Ethereum Quorum ledger using the Istanbul Byzantine Fault Tolerance (IBFT) consensus mechanism.
                    <br>
                    <br>
                    <el-link href="https://docs.microsoft.com/zh-cn/azure/blockchain/service/create-member" icon="el-icon-document" type="info" class="docslink">Docs</el-link>
                    <el-link href="https://github.com/Azure-Samples/blockchain/tree/master/blockchain-workbench/application-and-smart-contract-samples" icon="el-icon-data-board" type="info" class="demolink">Demo</el-link>
                  </p>
                </el-col>
              </el-row>
              <el-row :gutter="60" id="eventGridDemo" type="flex" justify="center" align="middle" class="bigrow">
                <el-col :xs="10.5" :sm="11" :md="11.5" :lg="12">
                  <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="eventPlayerOptions">
                  </video-player>
                </el-col>
                <el-col :xs="14.5" :sm="13" :md="12.5" :lg="12">
                  <p class="introduce">
                    Azure Event Grid allows you to easily build applications with event-based architectures. First, select the Azure resource you would like to subscribe to, and then give the event handler or WebHook endpoint to send the event to. Event Grid has built-in support for events coming from Azure services, like storage blobs and resource groups. Event Grid also has support for your own events, using custom topics.
                    <br>
                    You can use filters to route specific events to different endpoints, multicast to multiple endpoints, and make sure your events are reliably delivered.
                    <br>
                    Azure Event Grid is deployed to maximize availability by natively spreading across multiple fault domains in every region, and across availability zones (in regions that support them). 
                    <br>
                    <br>
                    <el-link href="https://docs.microsoft.com/zh-cn/azure/event-grid/" icon="el-icon-document" type="info" class="docslink">Docs</el-link>
                    <el-link href="https://github.com/Azure-Samples/event-grid-java-publish-consume-events" icon="el-icon-data-board" type="info" class="demolink">Demo</el-link>
                  </p>
                </el-col>
              </el-row>
              <el-row :gutter="60" id="logicAppsDemo" type="flex" justify="center" align="middle" class="bigrow">
                <el-col :xs="10.5" :sm="11" :md="11.5" :lg="12">
                  <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="logicPlayerOptions">
                  </video-player>
                </el-col>
                <el-col :xs="14.5" :sm="13" :md="12.5" :lg="12">
                  <p class="introduce">
                    Azure Logic Apps is a cloud service that helps you schedule, automate, and orchestrate tasks, business processes, and workflows when you need to integrate apps, data, systems, and services across enterprises or organizations. Logic Apps simplifies how you design and build scalable solutions for app integration, data integration, system integration and so on.
                    <br>
                    For example, here are just a few workloads you can automate with logic apps:
                    <ul>
                      <li>Process and route orders across on-premises systems and cloud services</li>
                      <li>Send email notifications with Office 365 when events happen in various systems, apps, and services</li>
                      <li>Move uploaded files from an SFTP or FTP server to Azure Storage</li>
                      <li>Monitor tweets for a specific subject, analyze the sentiment, and create alerts or tasks for items that need review</li>
                    </ul>
                    <el-link href="https://docs.microsoft.com/zh-cn/azure/logic-apps/" icon="el-icon-document" type="info" class="docslink">Docs</el-link>
                    <el-link href="https://github.com/Azure-Samples/azure-logic-apps-deployment-samples" icon="el-icon-data-board" type="info" class="demolink">Demo</el-link>
                  </p>
                </el-col>
              </el-row>
              <el-row :gutter="60" id="functionsDemo" type="flex" justify="center" align="middle" class="bigrow">
                <el-col :xs="10.5" :sm="11" :md="11.5" :lg="12">
                  <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="functionsPlayerOptions">
                  </video-player>
                </el-col>
                <el-col :xs="14.5" :sm="13" :md="12.5" :lg="12">
                  <p class="introduce">
                    Azure Functions is a serverless solution that allows you to write less code, maintain less infrastructure, and save on costs. Instead of worrying about deploying and maintaining servers, the cloud infrastructure provides all the up-to-date resources needed to keep your applications running.
                    <br>
                    You focus on the pieces of code that matter most to you, and Azure Functions handles the rest.
                    <br>
                    <br>
                    <el-link href="https://docs.microsoft.com/zh-cn/azure/azure-functions/" icon="el-icon-document" type="info" class="docslink">Docs</el-link>
                    <el-link href="https://github.com/Azure-Samples/azure-functions-samples-java" icon="el-icon-data-board" type="info" class="demolink">Demo</el-link>
                  </p>
                </el-col>
              </el-row>
              <el-row :gutter="60" id="sqlDemo" type="flex" justify="center" align="middle" class="bigrow">
                <el-col :xs="10.5" :sm="11" :md="11.5" :lg="12">
                  <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="sqlPlayerOptions">
                  </video-player>
                </el-col>
                <el-col :xs="14.5" :sm="13" :md="12.5" :lg="12">
                  <p class="introduce">
                    Azure SQL is a family of managed, secure, and intelligent products that use the SQL Server database engine in the Azure cloud.
                    <ul>
                      <li>Azure SQL Database: Support modern cloud applications on an intelligent, managed database service, that includes serverless compute.</li>
                      <li>Azure SQL Managed Instance: Modernize your existing SQL Server applications at scale with an intelligent fully managed instance as a service, with almost 100% feature parity with the SQL Server database engine. Best for most migrations to the cloud.</li>
                      <li>SQL Server on Azure VMs: Lift-and-shift your SQL Server workloads with ease and maintain 100% SQL Server compatibility and operating system-level access.</li>
                    </ul>
                    <el-link href="https://docs.microsoft.com/zh-cn/azure/azure-sql/" icon="el-icon-document" type="info" class="docslink">Docs</el-link>
                    <el-link href="https://github.com/Azure-Samples/azure-sql-db-import-data" icon="el-icon-data-board" type="info" class="demolink">Demo</el-link>
                  </p>
                </el-col>
              </el-row>
              <el-row :gutter="60" id="cosmosDemo" type="flex" justify="center" align="middle" class="bigrow">
                <el-col :xs="10.5" :sm="11" :md="11.5" :lg="12">
                  <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="cosmosPlayerOptions">
                  </video-player>
                </el-col>
                <el-col :xs="14.5" :sm="13" :md="12.5" :lg="12">
                  <p class="introduce">
                    Azure Cosmos DB is a fully managed NoSQL database for modern app development. Single-digit millisecond response times, and automatic and instant scalability, guarantee speed at any scale. Business continuity is assured with SLA-backed availability and enterprise-grade security. App development is faster and more productive thanks to turnkey multi region data distribution anywhere in the world, open source APIs and SDKs for popular languages. As a fully managed service, Azure Cosmos DB takes database administration off your hands with automatic management, updates and patching. It also handles capacity management with cost-effective serverless and automatic scaling options that respond to application needs to match capacity with demand.
                    <br>
                    <br>
                    <el-link href="https://docs.microsoft.com/zh-cn/azure/cosmos-db/" icon="el-icon-document" type="info" class="docslink">Docs</el-link>
                    <el-link href="https://github.com/Azure-Samples/cosmosdb-java-create-cosmosdb-and-configure-for-eventual-consistency" icon="el-icon-data-board" type="info" class="demolink">Demo</el-link>
                  </p>
                </el-col>
              </el-row>
              <el-row :gutter="60" id="mysqlDemo" type="flex" justify="center" align="middle" class="bigrow">
                <el-col :xs="10.5" :sm="11" :md="11.5" :lg="12">
                  <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="mysqlPlayerOptions">
                  </video-player>
                </el-col>
                <el-col :xs="14.5" :sm="13" :md="12.5" :lg="12">
                  <p class="introduce">
                    Azure Database for MySQL is a relational database service in the Microsoft cloud based on the MySQL Community Edition (available under the GPLv2 license) database engine, versions 5.6, 5.7, and 8.0. Azure Database for MySQL delivers:
                    <ul>
                      <li>Predictable performance, using inclusive pay-as-you-go pricing.</li>
                      <li>Elastic scaling within seconds.</li>
                      <li>Cost optimization controls with ability to stop/start server.</li>
                      <li>Enterprise grade security and industry-leading compliance to protect sensitive data at-rest and in-motion.</li>
                      <li>Monitoring and automation to simplify management and monitoring for large-scale deployments.</li>
                      <li>Industry-leading support experience.</li>
                    </ul>
                    <el-link href="https://docs.microsoft.com/zh-cn/azure/mysql/" icon="el-icon-document" type="info" class="docslink">Docs</el-link>
                    <el-link href="https://github.com/Azure-Samples/mysql-dotnet" icon="el-icon-data-board" type="info" class="demolink">Demo</el-link>
                  </p>
                </el-col>
              </el-row>
              <el-row :gutter="60" id="postgresqlDemo" type="flex" justify="center" align="middle" class="bigrow">
                <el-col :xs="10.5" :sm="11" :md="11.5" :lg="12">
                  <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="postgresqlPlayerOptions">
                  </video-player>
                </el-col>
                <el-col :xs="14.5" :sm="13" :md="12.5" :lg="12">
                  <p class="introduce">
                    Azure Database for PostgreSQL is a relational database service in the Microsoft cloud based on the PostgreSQL Community Edition (available under the GPLv2 license) database engine. Azure Database for PostgreSQL delivers:
                    <ul>
                      <li>Predictable performance, using inclusive pay-as-you-go pricing.</li>
                      <li>Elastic scaling within seconds.</li>
                      <li>Enterprise grade security and industry-leading compliance to protect sensitive data at-rest and in-motion.</li>
                      <li>Monitoring and automation to simplify management and monitoring for large-scale deployments.</li>
                      <li>Industry-leading support experience.</li>
                    </ul>
                    <el-link href="https://docs.microsoft.com/zh-cn/azure/postgresql/" icon="el-icon-document" type="info" class="docslink">Docs</el-link>
                    <el-link href="https://github.com/Azure-Samples/postgresql-dotnet" icon="el-icon-data-board" type="info" class="demolink">Demo</el-link>
                  </p>
                </el-col>
              </el-row>
              <el-row :gutter="60" id="machineDemo" type="flex" justify="center" align="middle" class="bigrow">
                <el-col :xs="10.5" :sm="11" :md="11.5" :lg="12">
                  <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="machinePlayerOptions">
                  </video-player>
                </el-col>
                <el-col :xs="14.5" :sm="13" :md="12.5" :lg="12">
                  <p class="introduce">
                    The studio offers multiple authoring experiences depending on the type project and the level of user experience.
                    <ul>
                      <li>Notebooks:Write and run your own code in managed Jupyter Notebook servers that are directly integrated in the studio.</li>
                      <li>Azure Machine Learning designer:Use the designer to train and deploy machine learning models without writing any code. Drag and drop datasets and modules to create ML pipelines. </li>
                      <li>Automated machine learning UI:Learn how to create automated ML experiments with an easy-to-use interface.</li>
                      <li>Data labeling:Use Azure Machine Learning data labeling to efficiently coordinate data labeling projects.</li>
                    </ul>
                    <el-link href="https://docs.microsoft.com/zh-cn/azure/machine-learning/" icon="el-icon-document" type="info" class="docslink">Docs</el-link>
                    <el-link href="https://github.com/Azure-Samples/MachineLearningSamples-Notebooks" icon="el-icon-data-board" type="info" class="demolink">Demo</el-link>
                  </p>
                </el-col>
              </el-row>
              <el-row :gutter="60" id="dataExplorerDemo" type="flex" justify="center" align="middle" class="bigrow">
                <el-col :xs="10.5" :sm="11" :md="11.5" :lg="12">
                  <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="dataExplorerPlayerOptions">
                  </video-player>
                </el-col>
                <el-col :xs="14.5" :sm="13" :md="12.5" :lg="12">
                  <p class="introduce">
                    Azure Data Explorer is a fast and highly scalable data exploration service for log and telemetry data. It helps you handle the many data streams emitted by modern software, so you can collect, store, and analyze data. Azure Data Explorer is ideal for analyzing large volumes of diverse data from any data source, such as websites, applications, IoT devices, and more. This data is used for diagnostics, monitoring, reporting, machine learning, and additional analytics capabilities. Azure Data Explorer makes it simple to ingest this data and enables you to do complex ad hoc queries on the data in seconds.
                    <br>
                    <br>
                    <el-link href="https://docs.microsoft.com/zh-cn/azure/data-explorer/" icon="el-icon-document" type="info" class="docslink">Docs</el-link>
                    <el-link href="https://github.com/Azure-Samples/azure-data-explorer-java-sdk-ingest" icon="el-icon-data-board" type="info" class="demolink">Demo</el-link>
                  </p>
                </el-col>
              </el-row>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Solution2">Solution2</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>

    <el-dialog
  title="Oops"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>We will have this idea in the near future..</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
var SpeechSDK = require("microsoft-cognitiveservices-speech-sdk");
var line1,
  line2,
  line3,
  line4,
  line5,
  line6,
  line7,
  line8,
  line9,
  line10,
  line11,
  line12,
  line13,
  line14,
  line15;
export default {
  name: "Search",
  data() {
    return {
      // bgconfig:{
      //   num: 2,
      //   rps: 0.1,
      //   radius: [5, 40],
      //   life: 10,
      //   v: [2, 3],
      //   tha: [-30, 30],
      //   body: icon,
      //   alpha: [0.6, 0],
      //   scale: [0.1, 0.4],
      //   position: "all",
      //   cross: "dead",
      //   random: 15
      // },
      dialogVisible: false,
      searchVal: "",
      loading: false,
      showblockchain: false,
      showdemo: false,
      showResult: false,
      IoTHub: require("../icons/blockchain/10182-icon-service-IoT-Hub.svg"),
      media: require("../icons/blockchain/10854-icon-service-Media.svg"),
      file: require("../icons/blockchain/10800-icon-service-File.svg"),
      IoTCentral: require("../icons/blockchain/10184-icon-service-IoT-Central-Applications.svg"),
      service: require("../icons/blockchain/10836-icon-service-Service-Bus.svg"),
      builder: require("../icons/blockchain/10852-icon-service-Workflow.svg"),
      blockservice: require("../icons/blockchain/10366-icon-service-Azure-Blockchain-Service.svg"),
      datamanager: require("../icons/blockchain/10364-icon-service-Outbound-Connection.svg"),
      grid: require("../icons/blockchain/10215-icon-service-Event-Grid-Domains.svg"),
      logic: require("../icons/blockchain/10201-icon-service-Logic-Apps.svg"),
      functions: require("../icons/blockchain/10029-icon-service-Function-Apps.svg"),
      sql: require("../icons/blockchain/10130-icon-service-SQL-Database.svg"),
      cosmos: require("../icons/blockchain/10121-icon-service-Azure-Cosmos-DB.svg"),
      mysql: require("../icons/blockchain/10122-icon-service-Azure-Database-MySQL-Server.svg"),
      postgre: require("../icons/blockchain/10131-icon-service-Azure-Database-PostgreSQL-Server.svg"),
      machine: require("../icons/blockchain/00030-icon-service-Machine-Learning-Studio-(Classic)-Web-Services.svg"),
      explorer: require("../icons/blockchain/10145-icon-service-Azure-Data-Explorer-Clusters.svg"),
      blockPlayerOptions: {
        //vue-video-player视频的option配置
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        preload: "auto",
        language: "zh-CN",
        aspectRatio: "4:3",
        fluid: true,
        sources: [
          {
            src: require("../videos/AzureBlockchainService.mp4"),
            type: "video/mp4",
          },
        ],
        poster:
          "https://azurecomcdn.azureedge.net/cvt-fe7ac154b9d83b2cb92c3e5173ed75b4c0ff908b795606ee8e5c173d32c6045d/mediahandler/files/videofiles/thumbnails/azure-blockchain-consortium-management/thumbnail.PNG",
        notSupportedMessage:
          "This video is temporarily unavailable, please try again later",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true,
        },
      },
      IoTPlayerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        preload: "auto",
        language: "zh-CN",
        aspectRatio: "4:3",
        fluid: true,
        sources: [
          {
            src: require("../videos/AzureIoTCentral.mp4"),
            type: "video/mp4",
          },
        ],
        poster:
          "https://azurecomcdn.azureedge.net/cvt-fe7ac154b9d83b2cb92c3e5173ed75b4c0ff908b795606ee8e5c173d32c6045d/mediahandler/files/videofiles/thumbnails/iot-central-updates/thumb_iot.png",
        notSupportedMessage:
          "This video is temporarily unavailable, please try again later",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true,
        },
      },
      servicePlayerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        preload: "auto",
        language: "zh-CN",
        aspectRatio: "4:3",
        fluid: true,
        sources: [
          {
            src: require("../videos/ServiceBus.mp4"),
            type: "video/mp4",
          },
        ],
        poster:
          "https://sec.ch9.ms/ch9/a8f0/cbdd70a1-bf8c-4b9a-a46a-c4dc4604a8f0/azfr527_960.jpg?v=fe7ac154b9d83b2cb92c3e5173ed75b4c0ff908b795606ee8e5c173d32c6045d",
        notSupportedMessage:
          "This video is temporarily unavailable, please try again later",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true,
        },
      },
      eventPlayerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        preload: "auto",
        language: "zh-CN",
        aspectRatio: "4:3",
        fluid: true,
        sources: [
          {
            src: require("../videos/EventGrid.mp4"),
            type: "video/mp4",
          },
        ],
        poster:
          "https://azurecomcdn.azureedge.net/cvt-fe7ac154b9d83b2cb92c3e5173ed75b4c0ff908b795606ee8e5c173d32c6045d/mediahandler/files/videofiles/thumbnails/an-overview-of-azure-event-grid/An-overview-of-Azure-Event-Grid-960x540.png",
        notSupportedMessage:
          "This video is temporarily unavailable, please try again later",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true,
        },
      },
      logicPlayerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        preload: "auto",
        language: "zh-CN",
        aspectRatio: "4:3",
        fluid: true,
        sources: [
          {
            src: require("../videos/LogicApp.mp4"),
            type: "video/mp4",
          },
        ],
        poster:
          "https://sec.ch9.ms/ch9/c033/c703cff2-d99b-4c02-a5e8-d90d1185c033/introducingazurelogicapps_960.jpg",
        notSupportedMessage:
          "This video is temporarily unavailable, please try again later",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true,
        },
      },
      functionsPlayerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        preload: "auto",
        language: "zh-CN",
        aspectRatio: "4:3",
        fluid: true,
        sources: [
          {
            src: require("../videos/AzureFunctions.mp4"),
            type: "video/mp4",
          },
        ],
        poster:
          "https://sec.ch9.ms/ch9/c5fe/197070f1-e224-440e-b2b1-f177edcdc5fe/Connect2018D250_Custom.jpg",
        notSupportedMessage:
          "This video is temporarily unavailable, please try again later",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true,
        },
      },
      sqlPlayerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        preload: "auto",
        language: "zh-CN",
        aspectRatio: "4:3",
        fluid: true,
        sources: [
          {
            src: require("../videos/AzureSQL.mp4"),
            type: "video/mp4",
          },
        ],
        poster:
          "https://sec.ch9.ms/ch9/a32e/55a93825-4db9-433a-9ba5-0fc969bca32e/Video3_960.jpg",
        notSupportedMessage:
          "This video is temporarily unavailable, please try again later",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true,
        },
      },
      cosmosPlayerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        preload: "auto",
        language: "zh-CN",
        aspectRatio: "4:3",
        fluid: true,
        sources: [
          {
            src: require("../videos/CosmosDB.mp4"),
            type: "video/mp4",
          },
        ],
        poster:
          "https://sec.ch9.ms/ch9/a8f7/73522a01-7823-48ec-898e-3554046ca8f7/azfr570_960.jpg",
        notSupportedMessage:
          "This video is temporarily unavailable, please try again later",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true,
        },
      },
      mysqlPlayerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        preload: "auto",
        language: "zh-CN",
        aspectRatio: "4:3",
        fluid: true,
        sources: [
          {
            src: require("../videos/MySQL.mp4"),
            type: "video/mp4",
          },
        ],
        poster:
          "https://azurecomcdn.azureedge.net/cvt-ec3a9548608d24de20acfa5b99890b0527c58e255da8bb710617fe9323d8e8c8/mediahandler/files/videofiles/thumbnails/mysql-intro-vid/MySQL%20Product%20Intro.jpg",
        notSupportedMessage:
          "This video is temporarily unavailable, please try again later",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true,
        },
      },
      postgresqlPlayerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        preload: "auto",
        language: "zh-CN",
        aspectRatio: "4:3",
        fluid: true,
        sources: [
          {
            src: require("../videos/PostgreSQL.mp4"),
            type: "video/mp4",
          },
        ],
        poster:
          "//azurecomcdn.azureedge.net/cvt-ec3a9548608d24de20acfa5b99890b0527c58e255da8bb710617fe9323d8e8c8/mediahandler/files/videofiles/thumbnails/postg-intro-vid/PostgreSQL%20Product%20Intro.jpg",
        notSupportedMessage:
          "This video is temporarily unavailable, please try again later",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true,
        },
      },
      machinePlayerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        preload: "auto",
        language: "zh-CN",
        aspectRatio: "4:3",
        fluid: true,
        sources: [
          {
            src: require("../videos/MachineLearning.mp4"),
            type: "video/mp4",
          },
        ],
        poster:
          "https://azurecomcdn.azureedge.net/cvt-ec3a9548608d24de20acfa5b99890b0527c58e255da8bb710617fe9323d8e8c8/mediahandler/files/videofiles/thumbnails/azure-ml-video/Capture.PNG",
        notSupportedMessage:
          "This video is temporarily unavailable, please try again later",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true,
        },
      },
      dataExplorerPlayerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        preload: "auto",
        language: "zh-CN",
        aspectRatio: "4:3",
        fluid: true,
        sources: [
          {
            src: require("../videos/DataExplorer.mp4"),
            type: "video/mp4",
          },
        ],
        poster:
          "https://azurecomcdn.azureedge.net/cvt-ec3a9548608d24de20acfa5b99890b0527c58e255da8bb710617fe9323d8e8c8/mediahandler/files/videofiles/thumbnails/what-is-azure-data-explorer/mq3.jpg",
        notSupportedMessage:
          "This video is temporarily unavailable, please try again later",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true,
        },
      },
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("Are you sure to close this dialog?")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    handleClick() {
      //get /product 只是get test
      this.$axios
        .get("/product", {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
        });
    },
    //搜索交互
    searchEnterFun() {
      //post /search
      //每次搜索先要将结果部分设置成不可见，避免出现上一次的结果
      this.showblockchain = false;
      this.showdemo = false;
      this.showResult = false;
      //隐藏多余的动态背景
      document.getElementById("two").style.position = "fixed";
      document.getElementById("three").style.position = "fixed";
      document.getElementById("four").style.position = "fixed";
      document.getElementById("five").style.position = "fixed";
      document.getElementById("six").style.position = "fixed";
      document.getElementById("seven").style.position = "fixed";
      document.getElementById("eight").style.position = "fixed";
      document.getElementById("nine").style.position = "fixed";

      //对画线进行判断，隐藏上次的画线
      this.drawBlockchain();
      console.log(this.searchVal);
      this.$axios
        .post(
          "/search",
          {
            text: this.searchVal,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res.data);
          if (
            res.data.keywordAzure[0].indexOf("blockchain") != -1
          ) {
            //显示结果和动态背景
            this.showResult = true;
            this.showblockchain = true;
            this.showdemo = true;
            document.getElementById("two").style.position = "unset";
            document.getElementById("three").style.position = "unset";
            document.getElementById("four").style.position = "unset";
            document.getElementById("five").style.position = "unset";
            document.getElementById("six").style.position = "unset";
            document.getElementById("seven").style.position = "unset";
            document.getElementById("eight").style.position = "unset";
            document.getElementById("nine").style.position = "unset";
          } else {
            this.dialogVisible = true
          }
        })
        .then(() => {
          if (this.showblockchain == true) {
            //结果显示后再进行画线
            this.drawBlockchain();
          }
        });
    },
    //画线及画线判断
    drawBlockchain() {
      if (this.showblockchain == true) {
        console.log(document.documentElement.clientWidth);
        line1 = this.$LeaderLine.setLine(
          this.$refs.rsensors,
          this.$refs.rcentral,
          {
            path: "straight",
            middleLabel: "1",
            // fontSize: 0.5,
            size: 3, //要进行自适应，需要获取当前屏幕大小，再动态改变fontSize和线的size
            hide: true,
          }
        );
        line2 = this.$LeaderLine.setLine(
          this.$refs.rmedia,
          this.$refs.rservice,
          {
            path: "grid",
            size: 3,
            hide: true,
          }
        );
        line3 = this.$LeaderLine.setLine(
          this.$refs.rfile,
          this.$refs.rservice,
          {
            path: "grid",
            endLabel: "1",
            size: 3,
            hide: true,
          }
        );
        line4 = this.$LeaderLine.setLine(
          this.$refs.rcentral,
          this.$refs.rservice,
          {
            path: "straight",
            size: 3,
            hide: true,
          }
        );
        line5 = this.$LeaderLine.setLine(
          this.$refs.rservice,
          this.$refs.rbuilder,
          {
            path: "straight",
            middleLabel: "2",
            size: 3,
            hide: true,
          }
        );
        line6 = this.$LeaderLine.setLine(
          this.$refs.rbuilder,
          this.$refs.rblockchain,
          {
            path: "straight",
            middleLabel: "3",
            size: 3,
            hide: true,
          }
        );
        line7 = this.$LeaderLine.setLine(
          this.$refs.rblockchain,
          this.$refs.rmanager,
          {
            path: "straight",
            startPlug: "arrow1",
            middleLabel: "4",
            size: 3,
            hide: true,
          }
        );
        line8 = this.$LeaderLine.setLine(
          this.$refs.rmanager,
          this.$refs.rgrid,
          {
            path: "straight",
            middleLabel: "4",
            size: 3,
            hide: true,
          }
        );
        line9 = this.$LeaderLine.setLine(this.$refs.rgrid, this.$refs.rlogic, {
          path: "grid",
          startSocket: "right",
          endSocket: "left",
          startLabel: "5",
          size: 3,
          hide: true,
        });
        line10 = this.$LeaderLine.setLine(
          this.$refs.rgrid,
          this.$refs.rfunctions,
          {
            path: "grid",
            startSocket: "right",
            endSocket: "left",
            size: 3,
            hide: true,
          }
        );
        line11 = this.$LeaderLine.setLine(this.$refs.rgrid, this.$refs.rsql, {
          path: "grid",
          startSocket: "right",
          endSocket: "left",
          size: 3,
          hide: true,
        });
        line12 = this.$LeaderLine.setLine(
          this.$refs.rgrid,
          this.$refs.rcosmos,
          {
            path: "grid",
            startSocket: "right",
            endSocket: "left",
            size: 3,
            hide: true,
          }
        );
        line13 = this.$LeaderLine.setLine(this.$refs.rgrid, this.$refs.rmysql, {
          path: "grid",
          startSocket: "right",
          endSocket: "left",
          size: 3,
          hide: true,
        });
        line14 = this.$LeaderLine.setLine(
          this.$refs.rgrid,
          this.$refs.rpostgre,
          {
            path: "grid",
            startSocket: "right",
            endSocket: "left",
            size: 3,
            hide: true,
          }
        );
        line15 = this.$LeaderLine.setLine(
          this.$refs.rentire,
          this.$refs.rmaex,
          {
            path: "straight",
            middleLabel: "6",
            size: 3,
            hide: true,
          }
        );
        //异步画线，setTimeout还是存在些问题的，比如没画完就重新搜索，它还会继续画
        line1.show("draw");
        setTimeout(() => {
          line2.show("draw");
          line3.show("draw");
          line4.show("draw");
        }, 1000);
        setTimeout(() => {
          line5.show("draw");
        }, 2000);
        setTimeout(() => {
          line6.show("draw");
        }, 3000);
        setTimeout(() => {
          line7.show("draw");
          line8.show("draw");
        }, 4000);
        setTimeout(() => {
          line9.show("draw");
          line10.show("draw");
          line11.show("draw");
          line12.show("draw");
          line13.show("draw");
          line14.show("draw");
        }, 5000);
        setTimeout(() => {
          line15.show("draw");
        }, 6000);
      } else if (this.showblockchain == false && line1 != null) {
        line1.hide("none");
        line2.hide("none");
        line3.hide("none");
        line4.hide("none");
        line5.hide("none");
        line6.hide("none");
        line7.hide("none");
        line8.hide("none");
        line9.hide("none");
        line10.hide("none");
        line11.hide("none");
        line12.hide("none");
        line13.hide("none");
        line14.hide("none");
        line15.hide("none");
      }
    },
    hideLinesOrNot(targetName, action) {
      var selectId = targetName.paneName - 0 + 1;
      console.log(selectId);
      //根据当前tab的id选择画线or隐藏
      if (selectId !== 1) {
        line1.hide("none");
        line2.hide("none");
        line3.hide("none");
        line4.hide("none");
        line5.hide("none");
        line6.hide("none");
        line7.hide("none");
        line8.hide("none");
        line9.hide("none");
        line10.hide("none");
        line11.hide("none");
        line12.hide("none");
        line13.hide("none");
        line14.hide("none");
        line15.hide("none");
      } else if (selectId === 1 && this.showblockchain === true) {
        line1.show("draw");
        setTimeout(() => {
          line2.show("draw");
          line3.show("draw");
          line4.show("draw");
        }, 1000);
        setTimeout(() => {
          line5.show("draw");
        }, 2000);
        setTimeout(() => {
          line6.show("draw");
        }, 3000);
        setTimeout(() => {
          line7.show("draw");
          line8.show("draw");
        }, 4000);
        setTimeout(() => {
          line9.show("draw");
          line10.show("draw");
          line11.show("draw");
          line12.show("draw");
          line13.show("draw");
          line14.show("draw");
        }, 5000);
        setTimeout(() => {
          line15.show("draw");
        }, 6000);
      }
    },
    //语音转文字
    voiceInput() {
      // subscription key and region for speech services.
      var subscriptionKey,
        serviceRegion,
        languageTargetOptions,
        languageSourceOptions;
      // var authorizationToken;
      var recognizer;
      //azure购买时的config，可能需要重新购买
      subscriptionKey = "a8b8dda4b92f45198929b8a51e4dec36";
      serviceRegion = "eastus";
      languageTargetOptions = "en";
      languageSourceOptions = "en-US";
      this.loading = true;

      var speechConfig;

      speechConfig = SpeechSDK.SpeechTranslationConfig.fromSubscription(
        subscriptionKey,
        serviceRegion
      );
      speechConfig.speechRecognitionLanguage = languageSourceOptions;
      let language = languageTargetOptions;
      speechConfig.addTargetLanguage(language);

      var audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
      recognizer = new SpeechSDK.TranslationRecognizer(
        speechConfig,
        audioConfig
      );

      recognizer.recognizeOnceAsync(
        (result) => {
          this.loading = false;
          let translation = result.translations.get(language);
          this.searchVal = translation;

          console.log(this.searchVal);
          recognizer.close();
          recognizer = undefined;
        },
        (err) => {
          this.loading = false;
          window.console.log(err);

          recognizer.close();
          recognizer = undefined;
        }
      );
    },
    //跳转到指定demo
    toBlockService() {
      document.getElementById("blockchainServiceDemo").scrollIntoView();
    },
    toIoTCentral() {
      document.getElementById("IoTCentralDemo").scrollIntoView();
    },
    toServiceBus() {
      document.getElementById("serviceBusDemo").scrollIntoView();
    },
    toEventDemo() {
      document.getElementById("eventGridDemo").scrollIntoView();
    },
    toLogicDemo() {
      document.getElementById("logicAppsDemo").scrollIntoView();
    },
    toFunctionsDemo() {
      document.getElementById("functionsDemo").scrollIntoView();
    },
    toSqlDemo() {
      document.getElementById("sqlDemo").scrollIntoView();
    },
    toCosmosDemo() {
      document.getElementById("cosmosDemo").scrollIntoView();
    },
    toMysqlDemo() {
      document.getElementById("mysqlDemo").scrollIntoView();
    },
    toPostgresqlDemo() {
      document.getElementById("postgresqlDemo").scrollIntoView();
    },
    toMachineDemo() {
      document.getElementById("machineDemo").scrollIntoView();
    },
    toDataExplorerDemo() {
      document.getElementById("dataExplorerDemo").scrollIntoView();
    },
    cpointer(e) {
      e.target.style.cursor = "pointer";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.maincontent {
  height: 100%;
  margin-top: 3%;
  .backcanvas {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    #two,
    #three,
    #four,
    #five,
    #six,
    #seven,
    #eight,
    #nine {
      position: fixed;
    }
  }
  .search {
    width: 100%;
    .el-input {
      width: 50%;
      font-size: 0.3rem;
      .el-icon-microphone:hover .tooltiptext {
        visibility: visible;
        font-size: 0.2rem;
      }

      .el-icon-microphone:hover {
        cursor: pointer;
      }
    }
  }
  .bigrow {
    margin-bottom: 3%;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .titlerow {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .searchRow {
    margin-bottom: 3%;
  }
  .eleDiv,
  .eleDivSensor,
  .eleDivIoT {
    width: 70%;
    margin: 0 auto;
  }
  .eleDivSensor {
    margin-top: -150%;
    margin-bottom: 90%;
  }
  .eleDivIoT {
    margin-top: -197%;
    margin-bottom: 125%;
  }
  .introduce {
    text-align: left;
    font-size: 0.25rem;
    line-height: 130%;
  }
  .docslink {
    font-size: 0.25rem;
  }
  .demolink {
    margin-left: 10%;
    font-size: 0.25rem;
  }
}
</style>
