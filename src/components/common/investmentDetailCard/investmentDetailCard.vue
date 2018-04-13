<template>
  <div class="investDetailCard">
		<h3 class="pro_title ">
			某再生革加工企业借款用于企业发展(QY18HYW029)<label>新手专享</label>
		</h3>
		<div class="pro_content-1">
			<p>约定年化(%)</p>
			<div class="info">9.5</div>
			<div class="pro">
				<div class="overplus">剩余可投：119,420元</div>
				<div>
					<p class="process_bg"></p>
					<p style="width:40.29%" class="process_bar"></p>
				</div>
				<div class="process_count">40.29%</div>
			</div>
			<ul>
				<li>
					<p>3个月</p>
					<p>期限</p>
				</li>
				<li>
						<p>200,000元</p>
					<p>借款金额</p>
				</li>
				<li>
					<p>一次性还本付息	</p>
					<p>还款方式</p>
				</li>
			</ul>
		</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.investDetailCard {
	min-height: 4.36rem;
	width: 100%;
	background: #FE6246;
	overflow: hidden;
	.pro_title {
		padding: 0.4rem 0.24rem 0.5rem;
		line-height: 0.3rem;
		font-size: 0.2rem;
		color: #fff;
		label {
			color: #ffe21c;
			margin-left: 0.15rem;
			padding: 0.03rem 0.1rem;
			border: 1px solid #ffe21c;
			border-radius: 0.05rem;
		}
	}
	.pro_content-1 {
		>p:nth-child(1) {
			font-size: 0.23rem;
			color: #fff;
			text-align: center;
		}
		.info {
			margin: 0.18rem 0 0.5rem;
			font-size: 0.72rem;
			text-align: center;
			color: #fff;
		}
		.pro {
			display: block;
			display: flex;
			font-size: 0.2rem;
			margin-bottom: 0.7rem;
			color: #fff;
			>div:nth-child(2){
				width: 1.52rem;
				position: relative;
			}
			.overplus {
				margin-right: 0.12rem;
				width: 2.69rem;
				text-align: right;
			}
			.process_count {
				margin-left: 0.12rem;
			}
			.process_bg {
				position: absolute;
				width: 100%;
				height: 0.1rem;
				background: rgba(0, 0, 0, 0.1);
				border-radius: 0.05rem;
				left: 0;
				top: 0.05rem;
			}
			.process_bar {
				position: absolute;
				height: 0.1rem;
				background: #ffe21c;
				border-radius: 0.05rem;
				left: 0;
				top: 0.05rem;
			}
		}
		ul {
			width: 100%;
			height: 0.74rem;
			margin-bottom: 0.26rem;
			display: block;
			display: flex;
			color: #fff;
			li {
				display: block;
				flex: 1;
				text-align: center;
				border-right: 1px solid rgba(0, 0, 0, 0.2);
				p:nth-child(1) {
					font-size:0.25rem;
					margin-bottom: 0.2rem;
				}
				p:nth-child(2) {
					font-size:0.2rem;
				}
			}
		}
	}
}
</style>